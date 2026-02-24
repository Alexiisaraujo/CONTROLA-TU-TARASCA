// ============================
// ESTADO GLOBAL
// ============================

let ledger = JSON.parse(localStorage.getItem("ledger")) || [];
let editingId = null;
let currentDate = new Date();
const MAX_AMOUNT = 10000000;

// ============================
// GUARDAR
// ============================

function save() {
  localStorage.setItem("ledger", JSON.stringify(ledger));
}

// ============================
// OBTENER TOTAL POR CUENTA
// ============================

function getAccountTotal(account) {
  let total = 0;

  ledger.forEach(entry => {
    entry.entries.forEach(e => {
      if (e.account === account) {
        total += e.debit - e.credit;
      }
    });
  });

  return total;
}

// ============================
// FORMATEAR DINERO
// ============================

function formatMoney(value) {
  return Number(value).toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// ============================
// ACTUALIZAR BALANCES
// ============================

function updateBalances() {

  const caja = getAccountTotal("Caja");
  const prestamos = Math.abs(getAccountTotal("Prestamos"));
  const deudas = Math.abs(getAccountTotal("Deudas"));

  document.getElementById("balance").textContent = "$" + formatMoney(caja);
  document.getElementById("loanTotal").textContent = formatMoney(prestamos);
  document.getElementById("debtTotal").textContent = formatMoney(deudas);
  document.getElementById("realBalance").textContent =
    formatMoney(caja - prestamos - deudas);

  document.getElementById("balance").style.color =
    caja >= 0 ? "#2ecc71" : "#e74c3c";
}

// ============================
// VALIDAR MONTO
// ============================

function validateAmount(amount) {
  if (isNaN(amount) || amount <= 0) {
    alert("Monto inválido.");
    return false;
  }

  if (amount > MAX_AMOUNT) {
    alert("Número demasiado grande.");
    return false;
  }

  return true;
}

// ============================
// POPUP PRÉSTAMO
// ============================

function loanPopup(principal) {

  let totalToPay = Number(prompt("¿Cuánto vas a pagar en total?"));

  if (isNaN(totalToPay) || totalToPay <= principal) {
    alert("El total debe ser mayor que el monto recibido.");
    return null;
  }

  let installments = Number(prompt("¿En cuántas cuotas?"));

  if (isNaN(installments) || installments <= 0) {
    alert("Cuotas inválidas.");
    return null;
  }

  const interestAmount = totalToPay - principal;
  const interestPercent = (interestAmount / principal) * 100;

  return {
    totalToPay,
    interestPercent: interestPercent.toFixed(2),
    installments
  };
}

// ============================
// AGREGAR MOVIMIENTO
// ============================

function addEntry(type) {

  const amount = Number(document.getElementById("amount").value);
  const description = document.getElementById("description").value;
  const operationType = document.getElementById("operationType").value;

  if (!validateAmount(amount)) return;

  const cajaActual = getAccountTotal("Caja");
  const deudaActual = Math.abs(getAccountTotal("Deudas"));
  const prestamoActual = Math.abs(getAccountTotal("Prestamos"));

  if (type === "expense" && amount > cajaActual) {
    alert("No tenés saldo suficiente.");
    return;
  }

  if (operationType === "debt" && type === "expense" && amount > deudaActual) {
    alert("No podés pagar más deuda de la que debés.");
    return;
  }

  if (operationType === "loan" && type === "expense" && amount > prestamoActual) {
    alert("No podés pagar más préstamo del que debés.");
    return;
  }

  let entries = [];
  let loanDetails = null;

  // NORMAL
  if (operationType === "normal") {

    if (type === "income") {
      entries = [
        { account: "Caja", debit: amount, credit: 0 },
        { account: "Ingresos", debit: 0, credit: amount }
      ];
    } else {
      entries = [
        { account: "Gastos", debit: amount, credit: 0 },
        { account: "Caja", debit: 0, credit: amount }
      ];
    }
  }

  // PRÉSTAMO
  if (operationType === "loan") {

    if (type === "income") {

      loanDetails = loanPopup(amount);
      if (!loanDetails) return;

      entries = [
        { account: "Caja", debit: amount, credit: 0 },
        { account: "Prestamos", debit: 0, credit: loanDetails.totalToPay }
      ];

    } else {

      entries = [
        { account: "Prestamos", debit: amount, credit: 0 },
        { account: "Caja", debit: 0, credit: amount }
      ];
    }
  }

  // DEUDA
  if (operationType === "debt") {

    if (type === "income") {
      entries = [
        { account: "Deudas", debit: 0, credit: amount }
      ];
    } else {
      entries = [
        { account: "Deudas", debit: amount, credit: 0 },
        { account: "Caja", debit: 0, credit: amount }
      ];
    }
  }

  const entry = {
    id: editingId || Date.now(),
    date: new Date().toISOString(),
    description,
    amount,
    type,
    operationType,
    loanDetails,
    entries
  };

  if (editingId) {
    ledger = ledger.map(l => l.id === editingId ? entry : l);
    editingId = null;
  } else {
    ledger.push(entry);
  }

  ledger.sort((a,b)=> new Date(b.date) - new Date(a.date));

  save();
  render();
  updateBalances();

  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
}

// ============================
// RENDER POR MES
// ============================

function render() {

  const list = document.getElementById("movementsList");
  if (!list) return;

  list.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const title = document.getElementById("currentMonth");
  if (title) {
    title.textContent =
      currentDate.toLocaleString("es-AR", { month: "long", year: "numeric" });
  }

  ledger.forEach(l => {

    const d = new Date(l.date);

    if (d.getFullYear() === year && d.getMonth() === month) {

      const div = document.createElement("div");
      div.className = "movement";

      div.innerHTML = `
        <div class="amount">
          ${l.type === "income" ? "+" : "-"}$${formatMoney(l.amount)}
        </div>
        <div>${l.description || "Sin descripción"}</div>
        <small>${d.toLocaleString()}</small>
        <div class="actions">
          <button data-edit="${l.id}">Editar</button>
          <button data-delete="${l.id}">Borrar</button>
        </div>
      `;

      list.appendChild(div);
    }
  });

  if (list.innerHTML === "") {
    list.innerHTML = "<p>No hay movimientos este mes.</p>";
  }
}

// ============================
// CAMBIO DE PANTALLAS
// ============================

document.getElementById("viewBtn").addEventListener("click", function() {
  document.getElementById("mainScreen").classList.add("hidden");
  document.getElementById("movementsScreen").classList.remove("hidden");
});

document.getElementById("backBtn").addEventListener("click", function() {
  document.getElementById("movementsScreen").classList.add("hidden");
  document.getElementById("mainScreen").classList.remove("hidden");
});

// ============================
// BOTONES INGRESO / EGRESO
// ============================

document.getElementById("incomeBtn").addEventListener("click", function() {
  addEntry("income");
});

document.getElementById("expenseBtn").addEventListener("click", function() {
  addEntry("expense");
});

// ============================
// EDITAR / BORRAR
// ============================

document.getElementById("movementsList").addEventListener("click", function(e) {

  if (e.target.dataset.delete) {
    const id = Number(e.target.dataset.delete);
    ledger = ledger.filter(l => l.id !== id);
    save();
    render();
    updateBalances();
  }

  if (e.target.dataset.edit) {
    const id = Number(e.target.dataset.edit);
    const entry = ledger.find(l => l.id === id);

    document.getElementById("amount").value = entry.amount;
    document.getElementById("description").value = entry.description;
    document.getElementById("operationType").value = entry.operationType;

    editingId = id;

    document.getElementById("mainScreen").classList.remove("hidden");
    document.getElementById("movementsScreen").classList.add("hidden");
  }

});

// ============================
// CAMBIAR MES
// ============================

document.getElementById("prevMonth").addEventListener("click", function() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  render();
});

document.getElementById("nextMonth").addEventListener("click", function() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  render();
});

// ============================
// INICIALIZACIÓN
// ============================

updateBalances();
render();
// ============================
// DESCARGAR MES ACTUAL EN CSV
// ============================

document.getElementById("downloadBtn").addEventListener("click", function () {

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  let csv = "Fecha,Descripcion,Cuenta,Debe,Haber\n";

  let movimientosDelMes = ledger.filter(l => {
    const d = new Date(l.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });

  if (movimientosDelMes.length === 0) {
    alert("No hay movimientos en este mes.");
    return;
  }

  movimientosDelMes.forEach(l => {
    l.entries.forEach(e => {
      csv += `${l.date},"${l.description || ""}",${e.account},${e.debit},${e.credit}\n`;
    });
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `libro_${month + 1}_${year}.csv`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

});