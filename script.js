// ================================================================
// TRADUCCIONES
// ================================================================
const I18N = {
  es: {
    appName:"Finanzas", login:"Entrar", register:"Registrarse",
    username:"Usuario", password:"Contraseña", repeatPassword:"Repetir contraseña",
    loanModalTitle:"Detalles del préstamo", loanReceived:"Monto recibido",
    loanTotal:"Total a pagar", loanInstallments:"Cantidad de cuotas",
    loanStartDate:"Fecha de 1ra cuota", cancel:"Cancelar", confirm:"Confirmar",
    loans:"Préstamos", debts:"Deudas", realBalance:"Balance real",
    amount:"Monto", description:"Descripción (opcional)",
    normalMovement:"Movimiento normal", loan:"Préstamo", debt:"Deuda",
    income:"Ingreso", expense:"Egreso",
    monthSummary:"Resumen del mes", net:"Neto", movements:"Movimientos",
    last6months:"Últimos 6 meses", topExpenses:"Gastos más grandes",
    myGoals:"Mis metas de ahorro", addGoal:"+ Agregar meta",
    goalNamePh:"Nombre (ej: Vacaciones)", goalTargetPh:"Cuánto querés ahorrar", goalSavedPh:"Ya tengo... (opcional)",
    settings:"Configuración", theme:"Tema", language:"Idioma",
    currency:"Moneda", account:"Cuenta", deleteAccount:"Eliminar cuenta",
    downloadCSV:"Descargar CSV",
    upcomingTitle:"Cuotas próximas",
    installmentOf:"Cuota", of:"de", dueOn:"Vence", monthly:"Mensual",
    interestRate:"Interés total", paidSoFar:"Pagado hasta ahora",
    remaining:"Restante", totalCost:"Costo total",
    noMovements:"No hay movimientos este mes.",
    noGoals:"Todavía no hay metas. ¡Agregá una!",
    noExpenses:"Sin gastos este mes.",
    confirmDelete:"¿Borrar este movimiento?",
    confirmDeleteGoal:"¿Eliminar esta meta?",
    confirmDeleteAccount:"¿Eliminar tu cuenta? Todos tus datos se borrarán. Esta acción no se puede deshacer.",
    confirmLogout:"¿Cerrar sesión?",
    noMovementsCSV:"No hay movimientos en este mes.",
    errInvalidAmount:"Monto inválido.", errTooBig:"Número demasiado grande.",
    errNoBalance:"No tenés saldo suficiente.",
    errNoDebt:"No podés pagar más deuda de la que debés.",
    errNoLoan:"No podés pagar más préstamo del que debés.",
    errLoanTotal:"El total a pagar debe ser mayor que el monto recibido.",
    errLoanInstallments:"Ingresá al menos 1 cuota.",
    errLoanDate:"Ingresá la fecha de la primera cuota.",
    errUsername:"El usuario debe tener al menos 3 caracteres.",
    errUsernameChars:"Solo letras, números y guión bajo.",
    errPassword:"La contraseña debe tener al menos 4 caracteres.",
    errPasswordMatch:"Las contraseñas no coinciden.",
    errUserExists:"Ese usuario ya existe.",
    errUserNotFound:"Usuario o contraseña incorrectos.",
    errGoalName:"Ingresá un nombre.", errGoalTarget:"Ingresá un monto objetivo.",
    errGoalSaved:"Ya tenés más de lo que querés ahorrar!",
    achieved:"¡Logrado!",
    loanInfoPct:"de interés total",
    loanInfoMonth:"cuota mensual aprox.",
  },
  pt: {
    appName:"Finanças", login:"Entrar", register:"Cadastrar",
    username:"Usuário", password:"Senha", repeatPassword:"Repetir senha",
    loanModalTitle:"Detalhes do empréstimo", loanReceived:"Valor recebido",
    loanTotal:"Total a pagar", loanInstallments:"Número de parcelas",
    loanStartDate:"Data da 1ª parcela", cancel:"Cancelar", confirm:"Confirmar",
    loans:"Empréstimos", debts:"Dívidas", realBalance:"Saldo real",
    amount:"Valor", description:"Descrição (opcional)",
    normalMovement:"Movimentação normal", loan:"Empréstimo", debt:"Dívida",
    income:"Receita", expense:"Despesa",
    monthSummary:"Resumo do mês", net:"Líquido", movements:"Movimentações",
    last6months:"Últimos 6 meses", topExpenses:"Maiores despesas",
    myGoals:"Minhas metas", addGoal:"+ Adicionar meta",
    goalNamePh:"Nome (ex: Viagem)", goalTargetPh:"Quanto quer guardar", goalSavedPh:"Já tenho... (opcional)",
    settings:"Configurações", theme:"Tema", language:"Idioma",
    currency:"Moeda", account:"Conta", deleteAccount:"Excluir conta",
    downloadCSV:"Baixar CSV",
    upcomingTitle:"Próximas parcelas",
    installmentOf:"Parcela", of:"de", dueOn:"Vence em", monthly:"Mensal",
    interestRate:"Juros total", paidSoFar:"Pago até agora",
    remaining:"Restante", totalCost:"Custo total",
    noMovements:"Nenhuma movimentação neste mês.",
    noGoals:"Nenhuma meta ainda. Adicione uma!",
    noExpenses:"Sem despesas neste mês.",
    confirmDelete:"Excluir esta movimentação?",
    confirmDeleteGoal:"Excluir esta meta?",
    confirmDeleteAccount:"Excluir sua conta? Todos os dados serão apagados. Essa ação não pode ser desfeita.",
    confirmLogout:"Sair da conta?",
    noMovementsCSV:"Nenhuma movimentação neste mês.",
    errInvalidAmount:"Valor inválido.", errTooBig:"Número muito grande.",
    errNoBalance:"Saldo insuficiente.",
    errNoDebt:"Não pode pagar mais dívida do que deve.",
    errNoLoan:"Não pode pagar mais empréstimo do que deve.",
    errLoanTotal:"O total a pagar deve ser maior que o valor recebido.",
    errLoanInstallments:"Informe pelo menos 1 parcela.",
    errLoanDate:"Informe a data da primeira parcela.",
    errUsername:"O usuário deve ter pelo menos 3 caracteres.",
    errUsernameChars:"Apenas letras, números e sublinhado.",
    errPassword:"A senha deve ter pelo menos 4 caracteres.",
    errPasswordMatch:"As senhas não coincidem.",
    errUserExists:"Esse usuário já existe.",
    errUserNotFound:"Usuário ou senha incorretos.",
    errGoalName:"Informe um nome.", errGoalTarget:"Informe um valor alvo.",
    errGoalSaved:"Você já tem mais do que quer guardar!",
    achieved:"Conquistado!",
    loanInfoPct:"de juros total",
    loanInfoMonth:"parcela mensal aprox.",
  },
  en: {
    appName:"Finance", login:"Sign In", register:"Sign Up",
    username:"Username", password:"Password", repeatPassword:"Repeat password",
    loanModalTitle:"Loan details", loanReceived:"Amount received",
    loanTotal:"Total to pay", loanInstallments:"Number of installments",
    loanStartDate:"First payment date", cancel:"Cancel", confirm:"Confirm",
    loans:"Loans", debts:"Debts", realBalance:"Real balance",
    amount:"Amount", description:"Description (optional)",
    normalMovement:"Normal movement", loan:"Loan", debt:"Debt",
    income:"Income", expense:"Expense",
    monthSummary:"Month summary", net:"Net", movements:"Movements",
    last6months:"Last 6 months", topExpenses:"Biggest expenses",
    myGoals:"My savings goals", addGoal:"+ Add goal",
    goalNamePh:"Name (e.g. Vacation)", goalTargetPh:"How much to save", goalSavedPh:"Already have... (optional)",
    settings:"Settings", theme:"Theme", language:"Language",
    currency:"Currency", account:"Account", deleteAccount:"Delete account",
    downloadCSV:"Download CSV",
    upcomingTitle:"Upcoming installments",
    installmentOf:"Installment", of:"of", dueOn:"Due", monthly:"Monthly",
    interestRate:"Total interest", paidSoFar:"Paid so far",
    remaining:"Remaining", totalCost:"Total cost",
    noMovements:"No movements this month.",
    noGoals:"No goals yet. Add one!",
    noExpenses:"No expenses this month.",
    confirmDelete:"Delete this movement?",
    confirmDeleteGoal:"Delete this goal?",
    confirmDeleteAccount:"Delete your account? All your data will be erased. This cannot be undone.",
    confirmLogout:"Sign out?",
    noMovementsCSV:"No movements this month.",
    errInvalidAmount:"Invalid amount.", errTooBig:"Number too large.",
    errNoBalance:"Insufficient balance.",
    errNoDebt:"Can't pay more debt than you owe.",
    errNoLoan:"Can't pay more loan than you owe.",
    errLoanTotal:"Total to pay must be greater than amount received.",
    errLoanInstallments:"Enter at least 1 installment.",
    errLoanDate:"Enter the first payment date.",
    errUsername:"Username must be at least 3 characters.",
    errUsernameChars:"Only letters, numbers and underscore.",
    errPassword:"Password must be at least 4 characters.",
    errPasswordMatch:"Passwords don't match.",
    errUserExists:"That username already exists.",
    errUserNotFound:"Incorrect username or password.",
    errGoalName:"Enter a name.", errGoalTarget:"Enter a target amount.",
    errGoalSaved:"You already have more than you want to save!",
    achieved:"Achieved!",
    loanInfoPct:"total interest",
    loanInfoMonth:"monthly installment approx.",
  }
};

// ================================================================
// TEMAS
// ================================================================
const THEMES = [
  { id:"obsidian", name:"Obsidian", colors:["#0f1115","#3b82f6","#1a1d23"] },
  { id:"aurora",   name:"Aurora",   colors:["#071a12","#10b981","#0d2218"] },
  { id:"crimson",  name:"Crimson",  colors:["#160a0a","#ef4444","#2a1414"] },
  { id:"gold",     name:"Gold",     colors:["#12100a","#f59e0b","#221e14"] },
  { id:"arctic",   name:"Arctic",   colors:["#f0f4f8","#0ea5e9","#ffffff"] },
  { id:"violet",   name:"Violet",   colors:["#0d0a1a","#8b5cf6","#1a1530"] },
  { id:"slate",    name:"Slate",    colors:["#0f1117","#38bdf8","#1d2436"] },
  { id:"rose",     name:"Rose",     colors:["#fff1f2","#f43f5e","#ffffff"] },
  { id:"godofwar", name:"God of War", colors:["#1a0500","#c0392b","#3d0c00"] },
];

// ================================================================
// STORAGE HELPERS
// ================================================================
function getUsers()               { return JSON.parse(localStorage.getItem("fin_users") || "{}"); }
function saveUsers(u)             { localStorage.setItem("fin_users", JSON.stringify(u)); }
function getSession()             { return localStorage.getItem("fin_session") || null; }
function saveSession(u)           { localStorage.setItem("fin_session", u); }
function clearSession()           { localStorage.removeItem("fin_session"); }
function getLedger(u)             { return JSON.parse(localStorage.getItem("fin_ledger_" + u) || "[]"); }
function saveLedger(u, d)         { localStorage.setItem("fin_ledger_" + u, JSON.stringify(d)); }
function getGoals(u)              { return JSON.parse(localStorage.getItem("fin_goals_" + u) || "[]"); }
function saveGoals(u, d)          { localStorage.setItem("fin_goals_" + u, JSON.stringify(d)); }
function getUserPrefs(u)          { return JSON.parse(localStorage.getItem("fin_prefs_" + u) || "{}"); }
function saveUserPrefs(u, p)      { localStorage.setItem("fin_prefs_" + u, JSON.stringify(p)); }

// ================================================================
// ESTADO GLOBAL
// ================================================================
let currentUser = null;
let ledger      = [];
let goals       = [];
let prefs       = { theme:"obsidian", lang:"es", currency:"ARS", symbol:"$" };
let editingId   = null;
let currentDate = new Date();
const MAX_AMOUNT = 10000000;

// Pending loan modal resolve
let loanModalResolve = null;

// ================================================================
// I18N
// ================================================================
function t(key) { return (I18N[prefs.lang] || I18N.es)[key] || key; }

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
}

// ================================================================
// TEMA
// ================================================================
function applyTheme(themeId) {
  document.documentElement.setAttribute("data-theme", themeId);
  const isGow = themeId === "godofwar";
  document.getElementById("gowBg").classList.toggle("hidden", !isGow);
  document.getElementById("gowCanvas").classList.toggle("hidden", !isGow);
  if (isGow) {
    startGowEmbers();
    applyGowImage(prefs.gowImage || "");
  } else {
    stopGowEmbers();
  }
}

// ── Fondo GOW ──
function applyGowImage(url) {
  const bg = document.getElementById("gowBg");
  if (url && url.startsWith("http")) {
    bg.style.backgroundImage = `url('${url}')`;
  } else {
    bg.style.backgroundImage = "none";
    bg.style.background = "radial-gradient(ellipse at 50% 80%, #5c0a00 0%, #1a0500 60%, #0d0000 100%)";
  }
}

// ── Partículas de brasa/ceniza ──
let gowAnimId = null;
const gowParticles = [];

function startGowEmbers() {
  const canvas = document.getElementById("gowCanvas");
  const ctx    = canvas.getContext("2d");
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  // Crear brasas iniciales
  gowParticles.length = 0;
  for (let i = 0; i < 55; i++) spawnEmber(canvas, true);

  function spawnEmber(c, random) {
    const types = ["ember","ash","spark"];
    const type  = types[Math.floor(Math.random() * types.length)];
    gowParticles.push({
      x:    Math.random() * c.width,
      y:    random ? Math.random() * c.height : c.height + 10,
      size: type === "ash" ? Math.random() * 3 + 1 : Math.random() * 2.5 + 0.5,
      vy:   -(Math.random() * 0.8 + 0.3),
      vx:   (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      decay: Math.random() * 0.003 + 0.001,
      color: type === "spark"
        ? `hsl(${Math.random()*30 + 10}, 100%, ${Math.random()*30+60}%)`
        : type === "ember"
        ? `hsl(${Math.random()*20 + 5}, 90%, 55%)`
        : `rgba(180,120,80,${Math.random()*0.5+0.2})`,
      flicker: Math.random() * Math.PI * 2,
      type,
    });
  }

  function loop() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = gowParticles.length - 1; i >= 0; i--) {
      const p = gowParticles[i];
      p.flicker += 0.06;
      p.x  += p.vx + Math.sin(p.flicker * 0.7) * 0.3;
      p.y  += p.vy;
      p.alpha -= p.decay;
      if (p.alpha <= 0 || p.y < -10) {
        gowParticles.splice(i, 1);
        spawnEmber(canvas, false);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = p.alpha * (0.85 + Math.sin(p.flicker) * 0.15);
      if (p.type === "ash") {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size, p.size * 0.5, p.flicker, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.shadowBlur  = p.type === "spark" ? 8 : 5;
        ctx.shadowColor = p.color;
        ctx.fillStyle   = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    gowAnimId = requestAnimationFrame(loop);
  }

  if (gowAnimId) cancelAnimationFrame(gowAnimId);
  loop();
}

function stopGowEmbers() {
  if (gowAnimId) { cancelAnimationFrame(gowAnimId); gowAnimId = null; }
  gowParticles.length = 0;
  const canvas = document.getElementById("gowCanvas");
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}


function buildThemeGrid() {
  const grid = document.getElementById("themeGrid");
  grid.innerHTML = "";
  THEMES.forEach(th => {
    const sw = document.createElement("div");
    sw.className = "theme-swatch" + (prefs.theme === th.id ? " active" : "");
    sw.style.background = `linear-gradient(135deg, ${th.colors[0]} 40%, ${th.colors[1]} 100%)`;
    sw.innerHTML = `<div class="swatch-check">✓</div><div class="theme-swatch-name">${th.name}</div>`;
    sw.addEventListener("click", () => {
      prefs.theme = th.id;
      saveUserPrefs(currentUser, prefs);
      applyTheme(th.id);
      buildThemeGrid();
      document.getElementById("gowImageSection").classList.toggle("hidden", th.id !== "godofwar");
      if (th.id === "godofwar") {
        document.getElementById("gowImageUrl").value = prefs.gowImage || "";
      }
    });
    grid.appendChild(sw);
  });
}

// ================================================================
// MONEDA
// ================================================================
function fmtMoney(v) {
  const sym = prefs.symbol || "$";
  return sym + Number(v).toLocaleString("es-AR", { minimumFractionDigits:2, maximumFractionDigits:2 });
}

// ================================================================
// HASH SIMPLE
// ================================================================
function simpleHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) { h = ((h << 5) + h) + str.charCodeAt(i); h = h & h; }
  return h.toString(16);
}

// ================================================================
// AUTH
// ================================================================
document.getElementById("tabLoginBtn").addEventListener("click", () => {
  document.getElementById("tabLoginBtn").classList.add("active");
  document.getElementById("tabRegisterBtn").classList.remove("active");
  document.getElementById("panelLogin").classList.remove("hidden");
  document.getElementById("panelRegister").classList.add("hidden");
  document.getElementById("loginError").textContent = "";
});
document.getElementById("tabRegisterBtn").addEventListener("click", () => {
  document.getElementById("tabRegisterBtn").classList.add("active");
  document.getElementById("tabLoginBtn").classList.remove("active");
  document.getElementById("panelRegister").classList.remove("hidden");
  document.getElementById("panelLogin").classList.add("hidden");
  document.getElementById("regError").textContent = "";
});
document.querySelectorAll(".eye-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const inp = document.getElementById(btn.dataset.target);
    inp.type = inp.type === "password" ? "text" : "password";
    btn.textContent = inp.type === "password" ? "👁" : "🙈";
  });
});

document.getElementById("registerBtn").addEventListener("click", () => {
  const username = document.getElementById("regUser").value.trim().toLowerCase();
  const pass     = document.getElementById("regPass").value;
  const pass2    = document.getElementById("regPass2").value;
  const errEl    = document.getElementById("regError");
  errEl.textContent = "";
  if (!username || username.length < 3)     { errEl.textContent = t("errUsername"); return; }
  if (!/^[a-z0-9_]+$/.test(username))       { errEl.textContent = t("errUsernameChars"); return; }
  if (!pass || pass.length < 4)             { errEl.textContent = t("errPassword"); return; }
  if (pass !== pass2)                        { errEl.textContent = t("errPasswordMatch"); return; }
  const users = getUsers();
  if (users[username])                       { errEl.textContent = t("errUserExists"); return; }
  users[username] = { hash: simpleHash(pass) };
  saveUsers(users);
  saveSession(username);
  launchApp(username);
});
document.getElementById("regPass2").addEventListener("keydown", e => { if (e.key === "Enter") document.getElementById("registerBtn").click(); });

document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("loginUser").value.trim().toLowerCase();
  const pass     = document.getElementById("loginPass").value;
  const errEl    = document.getElementById("loginError");
  errEl.textContent = "";
  if (!username) { errEl.textContent = t("errUsername"); return; }
  if (!pass)     { errEl.textContent = t("errPassword"); return; }
  const users = getUsers();
  if (!users[username] || users[username].hash !== simpleHash(pass)) { errEl.textContent = t("errUserNotFound"); return; }
  saveSession(username);
  launchApp(username);
});
document.getElementById("loginPass").addEventListener("keydown", e => { if (e.key === "Enter") document.getElementById("loginBtn").click(); });

// ================================================================
// LAUNCH APP
// ================================================================
function launchApp(username) {
  currentUser = username;
  ledger      = getLedger(username);
  goals       = getGoals(username);
  prefs       = { theme:"obsidian", lang:"es", currency:"ARS", symbol:"$", ...getUserPrefs(username) };

  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("appRoot").classList.remove("hidden");
  document.getElementById("topbarName").textContent = "👤 " + username;
  document.getElementById("settingsUsername").textContent = username;

  applyTheme(prefs.theme);
  applyI18n();
  updateSettingsUI();
  updateBalances();
  renderUpcoming();
  initAppListeners();
}

function initAppListeners() {
  // LOGOUT
  document.getElementById("logoutBtn").addEventListener("click", () => {
    if (!confirm(t("confirmLogout"))) return;
    clearSession(); currentUser = null; ledger = []; goals = []; editingId = null;
    document.getElementById("appRoot").classList.add("hidden");
    document.getElementById("authScreen").classList.remove("hidden");
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";
    document.getElementById("loginError").textContent = "";
  });

  // TABS
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
      btn.classList.add("active");
      document.getElementById("tab-" + tab).classList.remove("hidden");
      if (tab === "movements") { applyI18n(); renderMovements(); }
      if (tab === "stats")     { applyI18n(); renderStats(); }
      if (tab === "goals")     { applyI18n(); renderGoals(); }
      if (tab === "settings")  {
        applyI18n();
        buildThemeGrid();
        updateSettingsUI();
        document.getElementById("gowImageSection").classList.toggle("hidden", prefs.theme !== "godofwar");
        if (prefs.theme === "godofwar") document.getElementById("gowImageUrl").value = prefs.gowImage || "";
      }
    });
  });

  // INGRESO / EGRESO
  document.getElementById("incomeBtn").addEventListener("click",  () => addEntry("income"));
  document.getElementById("expenseBtn").addEventListener("click", () => addEntry("expense"));

  // MOVIMIENTOS
  document.getElementById("movementsList").addEventListener("click", e => {
    if (e.target.dataset.delete) {
      if (!confirm(t("confirmDelete"))) return;
      ledger = ledger.filter(l => l.id !== Number(e.target.dataset.delete));
      saveLedger(currentUser, ledger); renderMovements(); updateBalances();
    }
    if (e.target.dataset.edit) {
      const entry = ledger.find(l => l.id === Number(e.target.dataset.edit));
      if (!entry) return;
      document.getElementById("amount").value = entry.amount;
      document.getElementById("description").value = entry.description;
      document.getElementById("operationType").value = entry.operationType;
      editingId = entry.id;
      switchTab("home");
      document.getElementById("amount").focus();
    }
  });

  // MES
  document.getElementById("prevMonth").addEventListener("click", () => { currentDate.setMonth(currentDate.getMonth()-1); renderMovements(); });
  document.getElementById("nextMonth").addEventListener("click", () => { currentDate.setMonth(currentDate.getMonth()+1); renderMovements(); });

  // CSV
  document.getElementById("downloadBtn").addEventListener("click", downloadCSV);

  // METAS
  document.getElementById("addGoalBtn").addEventListener("click", addGoal);
  document.getElementById("goalsList").addEventListener("click", handleGoalClick);

  // SETTINGS — tema
  document.getElementById("themeGrid").addEventListener("click", () => {}); // handled in buildThemeGrid

  // SETTINGS — idioma
  document.getElementById("langRow").addEventListener("click", e => {
    const btn = e.target.closest("[data-lang]");
    if (!btn) return;
    prefs.lang = btn.dataset.lang;
    saveUserPrefs(currentUser, prefs);
    applyI18n();
    document.querySelectorAll("#langRow .option-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === prefs.lang));
  });

  // SETTINGS — moneda
  document.getElementById("currencyRow").addEventListener("click", e => {
    const btn = e.target.closest("[data-currency]");
    if (!btn) return;
    prefs.currency = btn.dataset.currency;
    prefs.symbol   = btn.dataset.symbol;
    saveUserPrefs(currentUser, prefs);
    updateBalances(); renderUpcoming();
    document.querySelectorAll("#currencyRow .option-btn").forEach(b => b.classList.toggle("active", b.dataset.currency === prefs.currency));
  });

  // SETTINGS — imagen God of War
  document.getElementById("gowImageBtn").addEventListener("click", () => {
    const url = document.getElementById("gowImageUrl").value.trim();
    prefs.gowImage = url;
    saveUserPrefs(currentUser, prefs);
    applyGowImage(url);
  });

  // SETTINGS — eliminar cuenta
  document.getElementById("deleteAccountBtn").addEventListener("click", () => {
    if (!confirm(t("confirmDeleteAccount"))) return;
    const users = getUsers();
    delete users[currentUser];
    saveUsers(users);
    localStorage.removeItem("fin_ledger_" + currentUser);
    localStorage.removeItem("fin_goals_"  + currentUser);
    localStorage.removeItem("fin_prefs_"  + currentUser);
    clearSession();
    currentUser = null; ledger = []; goals = [];
    document.getElementById("appRoot").classList.add("hidden");
    document.getElementById("authScreen").classList.remove("hidden");
  });
}

function updateSettingsUI() {
  document.querySelectorAll("#langRow .option-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === prefs.lang));
  document.querySelectorAll("#currencyRow .option-btn").forEach(b => b.classList.toggle("active", b.dataset.currency === prefs.currency));
}

function switchTab(name) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
  document.querySelector('[data-tab="' + name + '"]').classList.add("active");
  document.getElementById("tab-" + name).classList.remove("hidden");
}

// ================================================================
// MODAL PRÉSTAMO — Promise-based
// ================================================================
function openLoanModal(principal) {
  return new Promise(resolve => {
    loanModalResolve = resolve;

    document.getElementById("modalLoanAmount").textContent = fmtMoney(principal);
    document.getElementById("modalTotalToPay").value   = "";
    document.getElementById("modalInstallments").value = "";
    document.getElementById("modalStartDate").value    = todayISO();
    document.getElementById("loanPreview").classList.add("hidden");
    document.getElementById("loanModal").classList.remove("hidden");

    // Preview on input
    const updatePreview = () => {
      const total = Number(document.getElementById("modalTotalToPay").value);
      const inst  = Number(document.getElementById("modalInstallments").value);
      if (!total || !inst || total <= principal || inst < 1) {
        document.getElementById("loanPreview").classList.add("hidden"); return;
      }
      const interest  = ((total - principal) / principal * 100).toFixed(2);
      const monthly   = total / inst;
      const preview   = document.getElementById("loanPreview");
      preview.classList.remove("hidden");
      preview.innerHTML = `
        <div class="loan-preview-row"><span class="lpr-label">${t("loanTotal")}</span><span class="lpr-value bad">${fmtMoney(total)}</span></div>
        <div class="loan-preview-row"><span class="lpr-label">${t("interestRate")}</span><span class="lpr-value bad">${interest}% ${t("loanInfoPct")}</span></div>
        <div class="loan-preview-row"><span class="lpr-label">${t("monthly")}</span><span class="lpr-value">${fmtMoney(monthly)} ${t("loanInfoMonth")}</span></div>
        <div class="loan-preview-row"><span class="lpr-label">${t("loanInstallments")}</span><span class="lpr-value">${inst}</span></div>
      `;
    };
    document.getElementById("modalTotalToPay").oninput   = updatePreview;
    document.getElementById("modalInstallments").oninput = updatePreview;
  });
}

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

document.getElementById("modalCancel").addEventListener("click", () => {
  document.getElementById("loanModal").classList.add("hidden");
  if (loanModalResolve) { loanModalResolve(null); loanModalResolve = null; }
});

document.getElementById("modalConfirm").addEventListener("click", () => {
  const total = Number(document.getElementById("modalTotalToPay").value);
  const inst  = Number(document.getElementById("modalInstallments").value);
  const dateV = document.getElementById("modalStartDate").value;
  const principal = parseFloat(document.getElementById("modalLoanAmount").textContent.replace(/[^0-9.,]/g,"").replace(",","."));

  if (!total || total <= 0)  { alert(t("errLoanTotal")); return; }
  if (!inst || inst < 1)     { alert(t("errLoanInstallments")); return; }
  if (!dateV)                { alert(t("errLoanDate")); return; }

  const interest = ((total - principal) / principal * 100).toFixed(2);
  const monthly  = total / inst;

  // Generar schedule de cuotas
  const schedule = [];
  const start = new Date(dateV + "T12:00:00");
  for (let i = 0; i < inst; i++) {
    const d = new Date(start);
    d.setMonth(d.getMonth() + i);
    schedule.push({ num: i+1, date: d.toISOString().slice(0,10), amount: monthly, paid: false });
  }

  document.getElementById("loanModal").classList.add("hidden");
  if (loanModalResolve) {
    loanModalResolve({ totalToPay: total, installments: inst, interestPercent: interest, monthly, schedule, startDate: dateV });
    loanModalResolve = null;
  }
});

// ================================================================
// LÓGICA FINANCIERA
// ================================================================
function getAccountTotal(account) {
  let total = 0;
  ledger.forEach(entry => entry.entries.forEach(e => { if (e.account === account) total += e.debit - e.credit; }));
  return total;
}

function updateBalances() {
  const caja      = getAccountTotal("Caja");
  const prestamos = Math.abs(getAccountTotal("Prestamos"));
  const deudas    = Math.abs(getAccountTotal("Deudas"));
  document.getElementById("balance").textContent     = fmtMoney(caja);
  document.getElementById("loanTotal").textContent   = fmtMoney(prestamos).replace(prefs.symbol, "");
  document.getElementById("debtTotal").textContent   = fmtMoney(deudas).replace(prefs.symbol, "");
  document.getElementById("realBalance").textContent = fmtMoney(caja - prestamos - deudas).replace(prefs.symbol, "");
  document.getElementById("balance").style.color = caja >= 0 ? "var(--green)" : "var(--red)";
}

async function addEntry(type) {
  const amount        = Number(document.getElementById("amount").value);
  const description   = document.getElementById("description").value.trim();
  const operationType = document.getElementById("operationType").value;

  if (isNaN(amount) || amount <= 0) { alert(t("errInvalidAmount")); return; }
  if (amount > MAX_AMOUNT)          { alert(t("errTooBig")); return; }

  const caja     = getAccountTotal("Caja");
  const deudas   = Math.abs(getAccountTotal("Deudas"));
  const prestamos= Math.abs(getAccountTotal("Prestamos"));

  if (type === "expense" && operationType === "normal" && amount > caja)    { alert(t("errNoBalance")); return; }
  if (type === "expense" && operationType === "debt"   && amount > deudas)  { alert(t("errNoDebt")); return; }
  if (type === "expense" && operationType === "loan"   && amount > prestamos){ alert(t("errNoLoan")); return; }

  let entries     = [];
  let loanDetails = null;

  if (operationType === "normal") {
    entries = type === "income"
      ? [{ account:"Caja",   debit:amount, credit:0 }, { account:"Ingresos", debit:0, credit:amount }]
      : [{ account:"Gastos", debit:amount, credit:0 }, { account:"Caja",     debit:0, credit:amount }];
  }

  if (operationType === "loan") {
    if (type === "income") {
      loanDetails = await openLoanModal(amount);
      if (!loanDetails) return; // usuario canceló
      entries = [
        { account:"Caja",      debit:amount, credit:0 },
        { account:"Prestamos", debit:0, credit:loanDetails.totalToPay }
      ];
    } else {
      entries = [{ account:"Prestamos", debit:amount, credit:0 }, { account:"Caja", debit:0, credit:amount }];
    }
  }

  if (operationType === "debt") {
    entries = type === "income"
      ? [{ account:"Deudas", debit:0, credit:amount }]
      : [{ account:"Deudas", debit:amount, credit:0 }, { account:"Caja", debit:0, credit:amount }];
  }

  const entry = {
    id: editingId || Date.now(),
    date: new Date().toISOString(),
    description, amount, type, operationType, loanDetails, entries
  };

  if (editingId) {
    ledger = ledger.map(l => l.id === editingId ? entry : l);
    editingId = null;
  } else {
    ledger.push(entry);
  }

  ledger.sort((a, b) => new Date(b.date) - new Date(a.date));
  saveLedger(currentUser, ledger);
  updateBalances();
  renderUpcoming();
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
}

// ================================================================
// CUOTAS PRÓXIMAS (en tab home)
// ================================================================
function renderUpcoming() {
  const container = document.getElementById("upcomingInstallments");
  const loans = ledger.filter(l => l.operationType === "loan" && l.type === "income" && l.loanDetails && l.loanDetails.schedule);
  const today = new Date(); today.setHours(0,0,0,0);

  const upcoming = [];
  loans.forEach(l => {
    const sched = l.loanDetails.schedule.filter(s => !s.paid);
    const next  = sched[0];
    if (!next) return;
    const dueDate = new Date(next.date + "T00:00:00");
    const diffMs  = dueDate - today;
    const diffDays= Math.round(diffMs / 86400000);
    upcoming.push({ loan: l, next, dueDate, diffDays, paidCount: l.loanDetails.schedule.filter(s=>s.paid).length });
  });

  if (upcoming.length === 0) { container.innerHTML = ""; return; }

  let html = `<div class="upcoming-header">${t("upcomingTitle")}</div>`;
  upcoming.forEach(u => {
    const totalInst = u.loan.loanDetails.installments;
    const pct       = ((u.paidCount / totalInst) * 100).toFixed(0);
    const alert     = u.diffDays <= 7;
    const dateStr   = new Date(u.next.date + "T00:00:00").toLocaleDateString("es-AR", { day:"2-digit", month:"short", year:"numeric" });
    const pctInterest = u.loan.loanDetails.interestPercent;

    html += `
    <div class="upcoming-card">
      <div class="upcoming-loan-name">💳 ${u.loan.description || t("loan")}</div>
      <div class="upcoming-row ${alert ? "alert" : ""}">
        <span>${t("dueOn")}</span><span>${dateStr} ${alert ? "⚠️ " + u.diffDays + "d" : ""}</span>
      </div>
      <div class="upcoming-row">
        <span>${t("installmentOf")} ${u.paidCount + 1} ${t("of")} ${totalInst}</span>
        <span>${fmtMoney(u.loan.loanDetails.monthly)}</span>
      </div>
      <div class="upcoming-row">
        <span>${t("interestRate")}</span><span style="color:var(--red)">${pctInterest}%</span>
      </div>
      <div class="upcoming-row">
        <span>${t("paidSoFar")}</span><span>${fmtMoney(u.paidCount * u.loan.loanDetails.monthly)}</span>
      </div>
      <div class="upcoming-row">
        <span>${t("remaining")}</span><span>${fmtMoney((totalInst - u.paidCount) * u.loan.loanDetails.monthly)}</span>
      </div>
      <div style="margin-top:10px">
        <div class="goal-bar-wrap"><div class="goal-bar-fill" style="width:${pct}%"></div></div>
        <div class="goal-percent">${pct}% ${t("paidSoFar").toLowerCase()}</div>
      </div>
      <button style="margin-top:10px;background:var(--bg3);color:var(--text);border-radius:10px;padding:8px;font-size:13px;width:100%"
        data-payloan="${u.loan.id}">✅ Marcar cuota ${u.paidCount+1} como pagada</button>
    </div>`;
  });
  container.innerHTML = html;

  container.querySelectorAll("[data-payloan]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id   = Number(btn.dataset.payloan);
      const loan = ledger.find(l => l.id === id);
      if (!loan) return;
      const unpaid = loan.loanDetails.schedule.find(s => !s.paid);
      if (!unpaid) return;
      unpaid.paid = true;
      saveLedger(currentUser, ledger);
      renderUpcoming();
      updateBalances();
    });
  });
}

// ================================================================
// MOVIMIENTOS
// ================================================================
function renderMovements() {
  const list  = document.getElementById("movementsList");
  const year  = currentDate.getFullYear();
  const month = currentDate.getMonth();
  document.getElementById("currentMonth").textContent =
    currentDate.toLocaleString("es-AR", { month:"long", year:"numeric" });

  const filtered = ledger.filter(l => { const d=new Date(l.date); return d.getFullYear()===year && d.getMonth()===month; });
  if (filtered.length === 0) { list.innerHTML = `<p style="opacity:0.5;text-align:center;margin-top:20px">${t("noMovements")}</p>`; return; }
  list.innerHTML = "";

  filtered.forEach(l => {
    const d     = new Date(l.date);
    const color = l.type === "income" ? "var(--green)" : "var(--red)";
    const sign  = l.type === "income" ? "+" : "-";
    const tag   = l.operationType !== "normal"
      ? `<span style="font-size:11px;opacity:0.5;margin-left:6px">${l.operationType === "loan" ? t("loan") : t("debt")}</span>` : "";

    let loanInfo = "";
    if (l.loanDetails) {
      const paid = l.loanDetails.schedule ? l.loanDetails.schedule.filter(s=>s.paid).length : 0;
      loanInfo = `<div style="font-size:11px;color:var(--text2);margin-top:4px">
        📅 ${paid}/${l.loanDetails.installments} cuotas · ${l.loanDetails.interestPercent}% interés · ${fmtMoney(l.loanDetails.monthly)}/mes
      </div>`;
    }

    const div = document.createElement("div");
    div.className = "movement";
    div.innerHTML = `
      <div class="amount" style="color:${color}">${sign}${fmtMoney(l.amount)}${tag}</div>
      <div style="font-size:14px;opacity:0.8">${l.description || "Sin descripción"}</div>
      ${loanInfo}
      <small>${d.toLocaleString("es-AR")}</small>
      <div class="actions">
        <button data-edit="${l.id}">✏️</button>
        <button data-delete="${l.id}">🗑️</button>
      </div>`;
    list.appendChild(div);
  });
}

// ================================================================
// CSV
// ================================================================
function downloadCSV() {
  const year=currentDate.getFullYear(), month=currentDate.getMonth();
  const movs = ledger.filter(l => { const d=new Date(l.date); return d.getFullYear()===year && d.getMonth()===month; });
  if (movs.length === 0) { alert(t("noMovementsCSV")); return; }
  let csv = "Fecha,Descripcion,Cuenta,Debe,Haber\n";
  movs.forEach(l => l.entries.forEach(e => { csv += `${l.date},"${l.description||""}",${e.account},${e.debit},${e.credit}\n`; }));
  const blob = new Blob([csv], { type:"text/csv;charset=utf-8;" });
  const url  = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = `libro_${month+1}_${year}.csv`;
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
}

// ================================================================
// ESTADÍSTICAS
// ================================================================
function renderStats() {
  const now=new Date(), year=now.getFullYear(), month=now.getMonth();
  const thisMonth = ledger.filter(l => { const d=new Date(l.date); return d.getFullYear()===year && d.getMonth()===month; });
  let income=0, expense=0;
  thisMonth.forEach(l => {
    if (l.type==="income"  && l.operationType==="normal") income  += l.amount;
    if (l.type==="expense" && l.operationType==="normal") expense += l.amount;
  });
  document.getElementById("statIncome").textContent  = fmtMoney(income);
  document.getElementById("statExpense").textContent = fmtMoney(expense);
  document.getElementById("statCount").textContent   = thisMonth.length;
  const net=income-expense;
  const netEl = document.getElementById("statNet");
  netEl.textContent = fmtMoney(net);
  netEl.style.color = net >= 0 ? "var(--green)" : "var(--red)";
  renderBarChart();
  const topEl = document.getElementById("topExpenses");
  topEl.innerHTML = "";
  const expenses = thisMonth.filter(l=>l.type==="expense"&&l.operationType==="normal").sort((a,b)=>b.amount-a.amount).slice(0,5);
  if (!expenses.length) { topEl.innerHTML = `<p style="opacity:0.4;text-align:center;margin-top:10px">${t("noExpenses")}</p>`; return; }
  expenses.forEach(l => {
    const item = document.createElement("div");
    item.className = "top-expense-item";
    item.innerHTML = `<span class="te-desc">${l.description||"Sin descripción"}</span><span class="te-amount">-${fmtMoney(l.amount)}</span>`;
    topEl.appendChild(item);
  });
}

function renderBarChart() {
  const canvas = document.getElementById("barChart");
  const ctx    = canvas.getContext("2d");
  const incomes=[], expenses=[], months=[];
  for (let i=5; i>=0; i--) {
    const d=new Date(); d.setDate(1); d.setMonth(d.getMonth()-i);
    const y=d.getFullYear(), m=d.getMonth();
    months.push(d.toLocaleString("es-AR",{month:"short"}));
    let inc=0, exp=0;
    ledger.forEach(l => { const ld=new Date(l.date); if(ld.getFullYear()===y&&ld.getMonth()===m){ if(l.type==="income"&&l.operationType==="normal")inc+=l.amount; if(l.type==="expense"&&l.operationType==="normal")exp+=l.amount; } });
    incomes.push(inc); expenses.push(exp);
  }
  const W = canvas.parentElement.clientWidth - 32;
  canvas.width=W; canvas.height=180; ctx.clearRect(0,0,W,180);
  const maxVal=Math.max(...incomes,...expenses,1);
  const barW=Math.floor((W-40)/6/2-4);
  const chartH=140, baseY=155;
  const style = getComputedStyle(document.documentElement);
  const greenC = style.getPropertyValue("--green").trim() || "#4ade80";
  const redC   = style.getPropertyValue("--red").trim()   || "#f87171";
  const textC  = style.getPropertyValue("--text2").trim() || "#6b7280";
  months.forEach((label,i) => {
    const x=20+i*((W-40)/6);
    const incH=(incomes[i]/maxVal)*chartH; const expH=(expenses[i]/maxVal)*chartH;
    ctx.fillStyle = greenC+"99";
    ctx.beginPath(); ctx.roundRect(x, baseY-incH, barW, incH, 3); ctx.fill();
    ctx.fillStyle = redC+"99";
    ctx.beginPath(); ctx.roundRect(x+barW+3, baseY-expH, barW, expH, 3); ctx.fill();
    ctx.fillStyle = textC;
    ctx.font = "10px Inter,system-ui,sans-serif"; ctx.textAlign="center";
    ctx.fillText(label, x+barW, 170);
  });
}

// ================================================================
// METAS
// ================================================================
function addGoal() {
  const name   = document.getElementById("goalName").value.trim();
  const target = Number(document.getElementById("goalTarget").value);
  const saved  = Number(document.getElementById("goalSaved").value) || 0;
  if (!name)           { alert(t("errGoalName")); return; }
  if (!target||target<=0){ alert(t("errGoalTarget")); return; }
  if (saved > target)  { alert(t("errGoalSaved")); return; }
  goals.push({ id:Date.now(), name, target, saved });
  saveGoals(currentUser, goals); renderGoals();
  document.getElementById("goalName").value   = "";
  document.getElementById("goalTarget").value = "";
  document.getElementById("goalSaved").value  = "";
}

function renderGoals() {
  const list = document.getElementById("goalsList");
  list.innerHTML = "";
  if (!goals.length) { list.innerHTML = `<p style="opacity:0.4;text-align:center;margin-top:16px">${t("noGoals")}</p>`; return; }
  goals.forEach(g => {
    const pct=Math.min((g.saved/g.target)*100,100).toFixed(1);
    const done=parseFloat(pct)>=100;
    const card=document.createElement("div");
    card.className="goal-card";
    card.innerHTML=`
      <div class="goal-header"><span class="goal-name">${g.name}</span><button class="goal-delete" data-gdelete="${g.id}">✕</button></div>
      <div class="goal-amounts">${fmtMoney(g.saved)} de ${fmtMoney(g.target)}${done?" · ✅ "+t("achieved"):""}</div>
      <div class="goal-bar-wrap"><div class="goal-bar-fill ${done?"done":""}" style="width:${pct}%"></div></div>
      <div class="goal-percent">${pct}%</div>
      <div class="goal-add-row">
        <input type="number" placeholder="${t("amount")}" data-gadd="${g.id}" min="0">
        <button data-gadd-btn="${g.id}">+</button>
      </div>`;
    list.appendChild(card);
  });
}

function handleGoalClick(e) {
  if (e.target.dataset.gdelete) {
    if (!confirm(t("confirmDeleteGoal"))) return;
    goals = goals.filter(g => g.id !== Number(e.target.dataset.gdelete));
    saveGoals(currentUser, goals); renderGoals();
  }
  if (e.target.dataset.gaddBtn) {
    const id=Number(e.target.dataset.gaddBtn);
    const input=document.querySelector(`[data-gadd="${id}"]`);
    const val=Number(input.value);
    if (!val||val<=0){ input.focus(); return; }
    goals=goals.map(g=>g.id===id?{...g,saved:g.saved+val}:g);
    saveGoals(currentUser,goals); renderGoals(); input.value="";
  }
}

// ================================================================
// INICIO — sesión guardada
// ================================================================
(function init() {
  const session = getSession();
  const users   = getUsers();
  if (session && users[session]) { launchApp(session); }
})();
