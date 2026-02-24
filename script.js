let ledger = JSON.parse(localStorage.getItem("ledger")) || [];
let loans = JSON.parse(localStorage.getItem("loans")) || [];
let editingId = null;

const balanceEl = document.getElementById("balance");
const debtEl = document.getElementById("debt");
const realBalanceEl = document.getElementById("realBalance");

const amountInput = document.getElementById("amount");
const descInput = document.getElementById("description");
const loanInput = document.getElementById("isLoan");

const movementsList = document.getElementById("movementsList");

function save() {
  localStorage.setItem("ledger", JSON.stringify(ledger));
  localStorage.setItem("loans", JSON.stringify(loans));
}

function getTotal(account) {
  return ledger.reduce((acc, l) => {
    l.entries.forEach(e => {
      if (e.account === account) {
        acc += e.debit - e.credit;
      }
    });
    return acc;
  }, 0);
}

function updateBalances() {
  const caja = getTotal("Caja");
  const deuda = getTotal("Prestamos");

  balanceEl.textContent = "$" + caja;
  balanceEl.style.color = caja >= 0 ? "#2ecc71" : "#e74c3c";
  debtEl.textContent = deuda;
  realBalanceEl.textContent = caja - deuda;
}

function rebuildLoans() {
  loans = [];
  ledger.forEach(l => {
    const prestamoIngreso = l.entries.find(e => e.account === "Prestamos" && e.credit > 0);
    if (prestamoIngreso) {
      loans.push({ remaining: prestamoIngreso.credit });
    }
  });
}

function addEntry(type) {
  const amount = Number(amountInput.value);
  if (!amount) return;

  const date = new Date().toISOString();
  const desc = descInput.value;
  let entries = [];

  if (type === "income") {
    if (loanInput.checked) {
      entries = [
        { account: "Caja", debit: amount, credit: 0 },
        { account: "Prestamos", debit: 0, credit: amount }
      ];
    } else {
      entries = [
        { account: "Caja", debit: amount, credit: 0 },
        { account: "Ingresos", debit: 0, credit: amount }
      ];
    }
  }

  if (type === "expense") {
    if (loanInput.checked) {
      entries = [
        { account: "Prestamos", debit: amount, credit: 0 },
        { account: "Caja", debit: 0, credit: amount }
      ];
    } else {
      entries = [
        { account: "Gastos", debit: amount, credit: 0 },
        { account: "Caja", debit: 0, credit: amount }
      ];
    }
  }

  const entry = {
    id: editingId || Date.now(),
    date,
    description: desc,
    amount,
    type,
    isLoan: loanInput.checked,
    entries
  };

  if (editingId) {
    ledger = ledger.map(l => l.id === editingId ? entry : l);
    editingId = null;
  } else {
    ledger.push(entry);
  }

  ledger.sort((a,b)=> new Date(b.date) - new Date(a.date));

  rebuildLoans();
  save();
  render();
  updateBalances();

  amountInput.value = "";
  descInput.value = "";
  loanInput.checked = false;
}

function deleteEntry(id) {
  ledger = ledger.filter(l => l.id !== id);
  rebuildLoans();
  save();
  render();
  updateBalances();
}

function editEntry(id) {
  const l = ledger.find(x => x.id === id);
  amountInput.value = l.amount;
  descInput.value = l.description;
  loanInput.checked = l.isLoan;
  editingId = id;
  document.getElementById("mainScreen").classList.remove("hidden");
  document.getElementById("movementsScreen").classList.add("hidden");
}

function render() {
  movementsList.innerHTML = "";

  ledger.forEach(l => {
    const div = document.createElement("div");
    div.className = "movement";

    div.innerHTML = `
      <div class="amount">${l.type === "income" ? "+" : "-"}$${l.amount}</div>
      <div>${l.description || "Sin descripción"}</div>
      <small>${new Date(l.date).toLocaleString()} ${l.isLoan ? "(Préstamo)" : ""}</small>
      <div class="actions">
        <button onclick="editEntry(${l.id})">Editar</button>
        <button onclick="deleteEntry(${l.id})">Borrar</button>
      </div>
    `;

    movementsList.appendChild(div);
  });
}

document.getElementById("incomeBtn").onclick = () => addEntry("income");
document.getElementById("expenseBtn").onclick = () => addEntry("expense");

document.getElementById("viewBtn").onclick = () => {
  mainScreen.classList.add("hidden");
  movementsScreen.classList.remove("hidden");
};

document.getElementById("backBtn").onclick = () => {
  movementsScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
};

document.getElementById("downloadBtn").onclick = () => {
  let csv = "Fecha,Descripcion,Cuenta,Debe,Haber\n";
  ledger.forEach(l => {
    l.entries.forEach(e => {
      csv += `${l.date},"${l.description}",${e.account},${e.debit},${e.credit}\n`;
    });
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "libro_diario.csv";
  a.click();
};

rebuildLoans();
updateBalances();
render();