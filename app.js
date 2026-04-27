const SERVICES_PER_PAGE = 6;
const DATES_PER_PAGE = 7;
const API_URL = "https://script.google.com/macros/s/AKfycbwzMH84NsUIC8akJmrcoyFUTAGJKXvh5tFVzdHo0jJWerRXjvat6irgPe65in_wA8kK/exec";
const SHIFT_WINDOWS = [
  { id: 'morning', label: '8:00 AM - 11:00 AM', displayLabel: '8:00 AM', start: 8 * 60, end: 11 * 60 },
  { id: 'midday', label: '11:00 AM - 2:00 PM', displayLabel: '11:00 AM', start: 11 * 60, end: 14 * 60 },
  { id: 'afternoon', label: '2:00 PM - 5:00 PM', displayLabel: '2:00 PM', start: 14 * 60, end: 17 * 60 + 1 }
];

const CATEGORIES = [
  { id: 'colchones', name: 'Colchones' },
  { id: 'sofacamas', name: 'Sofacamas' },
  { id: 'salaTam', name: 'Juego De Sala Por Tamano' },
  { id: 'salaPoltronas', name: 'Juego De Sala Por Poltronas' },
  { id: 'comedorAsiento', name: 'Comedor Solo Asiento' },
  { id: 'comedorCompleto', name: 'Comedor Completo' },
  { id: 'peluches', name: 'Peluches' },
  { id: 'cojines', name: 'Cojines' },
  { id: 'tapetes', name: 'Tapetes' }
];

const services = [
  { id: 's1', title: 'Colchon Sencillo 1m x 1.90m', desc: 'Limpieza profunda para colchones sencillos.', price: 70000, time: 50, category: 'colchones' },
  { id: 's2', title: 'Colchon Semi Doble 1.20m x 1.90m', desc: 'Limpieza profunda para colchones semi dobles.', price: 90000, time: 60, category: 'colchones' },
  { id: 's3', title: 'Colchon Doble 1.40m x 1.90m', desc: 'Limpieza profunda para colchones dobles.', price: 100000, time: 65, category: 'colchones' },
  { id: 's4', title: 'Colchon Queen', desc: 'Limpieza profunda para colchones Queen.', price: 120000, time: 75, category: 'colchones' },
  { id: 's5', title: 'Colchon King 2.00m x 2.00m', desc: 'Limpieza profunda para colchones King.', price: 140000, time: 90, category: 'colchones' },
  { id: 's6', title: 'Sofacama 2 puestos', desc: 'Limpieza especializada para sofacamas de 2 puestos.', price: 80000, time: 80, category: 'sofacamas' },
  { id: 's7', title: 'Sofacama 3 puestos', desc: 'Limpieza especializada para sofacamas de 3 puestos.', price: 90000, time: 100, category: 'sofacamas' },
  { id: 's8', title: 'Sofacama grande', desc: 'Limpieza especializada para sofacamas grandes.', price: 110000, time: 120, category: 'sofacamas' },
  { id: 's9', title: 'Sala pequena', desc: 'Limpieza completa para salas pequenas.', price: 70000, time: 60, category: 'salaTam' },
  { id: 's10', title: 'Sala mediana', desc: 'Limpieza completa para salas medianas.', price: 90000, time: 90, category: 'salaTam' },
  { id: 's11', title: 'Sala grande', desc: 'Limpieza completa para salas grandes.', price: 140000, time: 150, category: 'salaTam' },
  { id: 's12', title: 'Sala 2 puestos + 2 individuales', desc: 'Limpieza sala de 2 puestos y 2 poltronas.', price: 110000, time: 120, category: 'salaPoltronas' },
  { id: 's13', title: 'Sala 3 puestos + 2 individuales', desc: 'Limpieza sala de 3 puestos y 2 poltronas.', price: 130000, time: 150, category: 'salaPoltronas' },
  { id: 's14', title: 'Comedor 4 puestos (solo asientos)', desc: 'Limpieza de asientos de comedor (4 puestos).', price: 50000, time: 40, category: 'comedorAsiento' },
  { id: 's15', title: 'Comedor 6 puestos (solo asientos)', desc: 'Limpieza de asientos de comedor (6 puestos).', price: 60000, time: 60, category: 'comedorAsiento' },
  { id: 's16', title: 'Comedor 8 puestos (solo asientos)', desc: 'Limpieza de asientos de comedor (8 puestos).', price: 80000, time: 80, category: 'comedorAsiento' },
  { id: 's17', title: 'Comedor completo 4 puestos', desc: 'Limpieza completa de comedor (4 puestos).', price: 60000, time: 70, category: 'comedorCompleto' },
  { id: 's18', title: 'Comedor completo 6 puestos', desc: 'Limpieza completa de comedor (6 puestos).', price: 80000, time: 90, category: 'comedorCompleto' },
  { id: 's19', title: 'Comedor completo 8 puestos', desc: 'Limpieza completa de comedor (8 puestos).', price: 100000, time: 120, category: 'comedorCompleto' },
  { id: 's20', title: 'Peluche pequeno', desc: 'Limpieza delicada para peluches pequenos.', price: 40000, time: 30, category: 'peluches' },
  { id: 's21', title: 'Peluche mediano', desc: 'Limpieza delicada para peluches medianos.', price: 60000, time: 40, category: 'peluches' },
  { id: 's22', title: 'Peluche grande', desc: 'Limpieza delicada para peluches grandes.', price: 90000, time: 60, category: 'peluches' },
  { id: 's23', title: 'Cojin decorativo (cada uno)', desc: 'Limpieza individual de cojines decorativos.', price: 5000, time: 10, category: 'cojines' },
  { id: 's24', title: 'Tapete 40cm x 60cm', desc: 'Limpieza de tapetes pequenos.', price: 40000, time: 30, category: 'tapetes' },
  { id: 's25', title: 'Tapete 1.00m x 0.80m', desc: 'Limpieza de tapetes medianos.', price: 50000, time: 45, category: 'tapetes' },
  { id: 's26', title: 'Tapete 1.20m x 1.00m', desc: 'Limpieza de tapetes grandes.', price: 60000, time: 60, category: 'tapetes' },
  { id: 's27', title: 'Tapete 1.50m x 1.50m', desc: 'Limpieza de tapetes extra grandes.', price: 70000, time: 90, category: 'tapetes' },
  { id: 's28', title: 'Tapete 1.80m x 1.80m', desc: 'Limpieza de tapetes cuadrados grandes.', price: 90000, time: 120, category: 'tapetes' },
  { id: 's29', title: 'Tapete 2.00m x 2.00m', desc: 'Limpieza de tapetes cuadrados muy grandes.', price: 100000, time: 150, category: 'tapetes' }
];

const collaborators = [
  { id: 'c1', name: 'Limpieza Real', avatar: 'images/barbero2.jpg' },
];

let state = {
  filtered: services.slice(),
  page: 1, 
  pageCount: 1,
  currentStep: 1,
  cart: [],
  selectedCollaborator: null,
  selectedDate: null,
  selectedTime: null,
  selectedShift: null,
  clientName: null,
  clientPhone: null,
  clientAddress: null,
  selectedBarberWhatsapp: null
};
let toastTimer = null;

function dateToYMD(d) {
  if (!d) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function showToast(msg, type = 'warning', ms = 2200) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const toastType = type === 'success' ? 'success' : 'warning';
  if (toastTimer) clearTimeout(toastTimer);

  toast.classList.remove('show', 'toast-success', 'toast-warning');
  toast.textContent = msg;
  toast.classList.add(`toast-${toastType}`);
  requestAnimationFrame(() => toast.classList.add('show'));

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, ms);
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showReservedSlotModal(message = 'Este horario ya esta reservado.') {
  if (typeof Swal === 'undefined') {
    showToast(message);
    return;
  }

  Swal.fire({
    title: 'Horario no disponible',
    text: message,
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#d4aa2f',
    background: '#101010',
    color: '#f5f5f7',
    backdrop: 'rgba(0,0,0,0.55)',
    width: 330,
    customClass: {
      popup: 'premium-mini-modal',
      title: 'premium-mini-title',
      htmlContainer: 'premium-mini-text',
      confirmButton: 'premium-mini-confirm'
    }
  });
}

function setDisplay(selector, displayValue) {
  const el = document.querySelector(selector);
  if (el) el.style.display = displayValue;
}

function setActiveStep(stepNumber) {
  state.currentStep = stepNumber;
  const steps = document.querySelectorAll('.workflow-step');
  steps.forEach(step => {
    const stepValue = Number(step.getAttribute('data-step'));
    step.classList.remove('active', 'done');
    if (stepValue < stepNumber) step.classList.add('done');
    if (stepValue === stepNumber) step.classList.add('active');
  });
}

function showServiceStage() {
  setDisplay('#service-intro', 'block');
  setDisplay('.filters', 'block');
  setDisplay('.services-section', 'block');
  setDisplay('#cart-toggle', 'inline-flex');
  setActiveStep(2);
}

function hideServiceStage() {
  setDisplay('#service-intro', 'none');
  setDisplay('.filters', 'none');
  setDisplay('.services-section', 'none');
  setDisplay('#cart-toggle', 'none');
}

function syncClientStateFromInputs() {
  const name = (document.getElementById('client-name')?.value || '').trim();
  const phone = (document.getElementById('client-phone')?.value || '').trim();
  const address = (document.getElementById('client-address')?.value || '').trim();
  state.clientName = name;
  state.clientPhone = phone;
  state.clientAddress = address;
}

function hydrateClientInputsFromState() {
  const nameInput = document.getElementById('client-name');
  const phoneInput = document.getElementById('client-phone');
  const addressInput = document.getElementById('client-address');
  if (nameInput) nameInput.value = state.clientName || '';
  if (phoneInput) phoneInput.value = state.clientPhone || '';
  if (addressInput) addressInput.value = state.clientAddress || '';
}

function hasClientData() {
  syncClientStateFromInputs();
  return !!state.clientName && !!state.clientPhone && !!state.clientAddress;
}

function hasSelectedArticles() {
  return state.cart.length > 0;
}

function hasBookingData() {
  return !!state.selectedCollaborator && !!state.selectedDate && !!state.selectedTime;
}

function navigateToStep(targetStep, options = {}) {
  const currentStep = state.currentStep || 1;
  const isForwardMove = targetStep > currentStep;
  const bypassGuards = options.bypassGuards === true;
  const strictForward = options.strictForward === true;

  if (!bypassGuards && isForwardMove) {
    if (strictForward) {
      if (!hasClientData() || !hasSelectedArticles() || !hasBookingData()) {
        showToast('Para avanzar desde los pasos superiores, primero completa todo el flujo.');
        return;
      }
    } else {
      if (targetStep >= 2 && !hasClientData()) {
        showToast('Completa primero tus datos del Paso 1.');
        return;
      }
      if (targetStep >= 3 && !hasSelectedArticles()) {
        showToast('Primero selecciona al menos un articulo en el Paso 2.');
        return;
      }
    }
  }

  if (targetStep === 1) {
    setActiveStep(1);
    hydrateClientInputsFromState();
    setDisplay('#client-form-section', 'block');
    hideServiceStage();
    const drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.remove('open');
    document.getElementById('client-form-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  if (targetStep === 2) {
    if (!hasClientData()) {
      showToast('Completa primero tus datos del Paso 1.');
      return;
    }
    setActiveStep(2);
    showServiceStage();
    const drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.remove('open');
    document.getElementById('service-intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  if (targetStep === 3) {
    if (!hasClientData()) {
      showToast('Completa primero tus datos del Paso 1.');
      return;
    }
    if (!hasSelectedArticles()) {
      showToast('Primero selecciona al menos un articulo en el Paso 2.');
      return;
    }

    showServiceStage();
    setActiveStep(3);
    const drawer = document.getElementById('drawer');
    if (drawer) drawer.classList.add('open');

    if (hasBookingData()) renderClientForm();
    else renderBookingStep();
  }
}

function renderCategories() {
  const container = document.querySelector('.pill-list');
  if (!container) return;

  container.innerHTML = '<button class="pill active" data-cat="all">Todo</button>';

  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'pill';
    btn.dataset.cat = cat.id;
    btn.textContent = cat.name;
    container.appendChild(btn);
  });

  container.querySelectorAll('.pill').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.pill').forEach(item => item.classList.remove('active'));
      btn.classList.add('active');
      state.page = 1;
      renderServices();
    });
  });
}

function renderServices() {
  const list = document.getElementById('services-list');
  if (!list) return;

  const search = (document.getElementById('search')?.value || '').trim().toLowerCase();
  const activeCat = document.querySelector('.pill.active')?.dataset.cat || 'all';

  state.filtered = services.filter(s => {
    if (activeCat !== 'all' && s.category !== activeCat) return false;
    if (!search) return true;
    return `${s.title} ${s.desc || ''}`.toLowerCase().includes(search);
  });

  state.pageCount = Math.max(1, Math.ceil(state.filtered.length / SERVICES_PER_PAGE));
  if (state.page > state.pageCount) state.page = state.pageCount;

  const start = (state.page - 1) * SERVICES_PER_PAGE;
  const pageServices = state.filtered.slice(start, start + SERVICES_PER_PAGE);

  list.innerHTML = '';

  pageServices.forEach(s => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="meta"><span class="badge"></span><div class="time">${s.time ? `${s.time} min` : ''}</div></div>
      <div class="title">${s.title}</div>
      <div class="desc">${s.desc || ''}</div>
      <div class="add-btn-container"><button class="add-btn" data-id="${s.id}">Seleccionar</button></div>
    `;
    list.appendChild(card);
  });

  const indicator = document.getElementById('page-indicator');
  if (indicator) indicator.textContent = `${state.page} / ${state.pageCount}`;

  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  if (prevBtn) prevBtn.disabled = state.page <= 1;
  if (nextBtn) nextBtn.disabled = state.page >= state.pageCount;

  list.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
  });
}

function addToCart(serviceId) {
  const service = services.find(s => s.id === serviceId);
  if (!service) {
    showToast('Servicio no encontrado');
    return;
  }

  const existing = state.cart.find(item => item.serviceId === serviceId);
  if (existing) existing.qty += 1;
  else state.cart.push({ serviceId, qty: 1, serviceObj: { ...service } });

  renderCart();
  setActiveStep(3);
  showToast('Articulo agregado. Continua con Agenda en el carrito.', 'success');

  const drawer = document.getElementById('drawer');
  if (drawer) drawer.classList.add('open');
}

function removeFromCart(serviceId) {
  state.cart = state.cart.filter(item => item.serviceId !== serviceId);
  renderCart();
}

function changeQty(serviceId, delta) {
  const item = state.cart.find(entry => entry.serviceId === serviceId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(serviceId);
    return;
  }
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-contents');
  const cartCount = document.getElementById('cart-count');
  const nextBtn = document.getElementById('next-step');
  if (!container) return;

  if (nextBtn) {
    nextBtn.style.display = 'block';
    nextBtn.textContent = 'Continuar';
  }

  container.innerHTML = '';

  if (state.cart.length === 0) {
    container.innerHTML = '<p class="empty">Aun no has seleccionado articulos.</p>';
    if (cartCount) cartCount.textContent = '0';
    if (nextBtn) nextBtn.classList.add('disabled');
    return;
  }

  if (nextBtn) nextBtn.classList.remove('disabled');

  const list = document.createElement('div');
  list.className = 'cart-list';

  state.cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div class="cart-info"><div class="cart-title">${item.serviceObj.title}</div><div class="cart-sub">Cantidad: ${item.qty}</div></div>
      <div class="cart-actions">
        <button class="qty-btn" data-action="dec" data-id="${item.serviceObj.id}">-</button>
        <span class="qty">${item.qty}</span>
        <button class="qty-btn" data-action="inc" data-id="${item.serviceObj.id}">+</button>
        <button class="remove-btn" data-id="${item.serviceObj.id}">x</button>
      </div>
    `;
    list.appendChild(row);
  });

  container.appendChild(list);

  if (cartCount) {
    cartCount.textContent = String(state.cart.reduce((sum, item) => sum + item.qty, 0));
    cartCount.classList.add('bump');
    setTimeout(() => cartCount.classList.remove('bump'), 300);
  }

  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = btn.dataset.action === 'inc' ? 1 : -1;
      changeQty(btn.dataset.id, delta);
    });
  });

  container.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
  });
}

function getStartOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseSlotToMinutes(slot) {
  if (!slot) return null;
  const normalized = String(slot).trim().toUpperCase().replace(/\./g, '').replace(/\s+/g, ' ');
  const match = normalized.match(/(\d{1,2})(?::(\d{2}))?(?::\d{2})?\s*(AM|PM)?/);
  if (!match) return null;

  let hour = parseInt(match[1], 10);
  const minute = parseInt(match[2] || '0', 10);
  const ampm = match[3];

  if (Number.isNaN(hour) || Number.isNaN(minute) || minute < 0 || minute > 59) return null;

  if (ampm) {
    if (hour < 1 || hour > 12) return null;
    if (hour === 12) hour = 0;
    if (ampm === 'PM') hour += 12;
  } else if (hour < 0 || hour > 23) {
    return null;
  }

  return hour * 60 + minute;
}

function getShiftIdForMinutes(minutes) {
  if (minutes === null) return null;
  const shift = SHIFT_WINDOWS.find(item => minutes >= item.start && minutes < item.end);
  return shift ? shift.id : null;
}

function getSelectedShiftLabel() {
  if (state.selectedShift) {
    const shift = SHIFT_WINDOWS.find(item => item.id === state.selectedShift);
    if (shift) return shift.displayLabel || shift.label;
  }

  const shiftFromLabel = SHIFT_WINDOWS.find(item => item.label === state.selectedTime);
  if (shiftFromLabel) return shiftFromLabel.displayLabel || shiftFromLabel.label;

  const minutes = parseSlotToMinutes(state.selectedTime);
  const shiftId = getShiftIdForMinutes(minutes);
  if (shiftId) {
    const shift = SHIFT_WINDOWS.find(item => item.id === shiftId);
    if (shift) return shift.displayLabel || shift.label;
  }

  return 'No especificada';
}

function getDefaultCollaboratorId() {
  return collaborators[0] ? collaborators[0].id : null;
}

function isSaturday(date) {
  return date.getDay() === 6;
}

function getDatePageFromSelected(selectedDate) {
  if (!selectedDate) return 0;

  const today = getStartOfDay(new Date());
  const target = getStartOfDay(selectedDate);
  if (target < today) return 0;

  let nonSaturdayCount = 0;
  const cursor = new Date(today);

  while (cursor < target) {
    if (!isSaturday(cursor)) nonSaturdayCount += 1;
    cursor.setDate(cursor.getDate() + 1);
  }

  return Math.floor(nonSaturdayCount / DATES_PER_PAGE);
}

function getAvailableDatesPage(pageIndex) {
  const dates = [];
  const today = getStartOfDay(new Date());
  const targetSkip = pageIndex * DATES_PER_PAGE;
  let skipped = 0;
  const cursor = new Date(today);

  while (dates.length < DATES_PER_PAGE) {
    if (!isSaturday(cursor)) {
      if (skipped < targetSkip) skipped += 1;
      else dates.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

function renderBookingStep() {
  const container = document.getElementById('cart-contents');
  const nextBtn = document.getElementById('next-step');
  if (!container) return;

  const defaultCollaboratorId = getDefaultCollaboratorId();
  if (defaultCollaboratorId && state.selectedCollaborator !== defaultCollaboratorId) {
    state.selectedCollaborator = defaultCollaboratorId;
    state.selectedTime = null;
    state.selectedShift = null;
  }

  setActiveStep(3);
  container.innerHTML = '';

  if (nextBtn) {
    nextBtn.style.display = 'block';
    nextBtn.textContent = 'Revisar y finalizar';
  }

  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn';
  backBtn.textContent = 'Volver a articulos';
  backBtn.addEventListener('click', renderCart);
  container.appendChild(backBtn);

  if (state.selectedDate && isSaturday(state.selectedDate)) {
    state.selectedDate = null;
    state.selectedTime = null;
    state.selectedShift = null;
  }

  const title = document.createElement('h3');
  title.className = 'booking-stage-title';
  title.textContent = 'Paso 3. Elige tecnico, fecha y horario';
  container.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.className = 'booking-stage-subtitle';
  subtitle.textContent = 'Agenda tu servicio en pocos toques. Los sabados no estan disponibles.';
  container.appendChild(subtitle);

  const techPanel = document.createElement('section');
  techPanel.className = 'booking-panel';
  techPanel.innerHTML = '<p class="booking-panel-title">Operador asignado automaticamente</p>';
  const assignedTech = collaborators.find(item => item.id === state.selectedCollaborator);
  const techHint = document.createElement('p');
  techHint.className = 'booking-panel-hint';
  techHint.textContent = assignedTech
    ? `${assignedTech.name} gestionara tu solicitud.`
    : 'Tu solicitud sera gestionada por el operador disponible.';
  techPanel.appendChild(techHint);
  container.appendChild(techPanel);

  let datePage = getDatePageFromSelected(state.selectedDate);

  const datePanel = document.createElement('section');
  datePanel.className = 'booking-panel';
  datePanel.innerHTML = '<p class="booking-panel-title">2. Selecciona fecha</p><p class="booking-panel-hint">No se muestran sabados en la agenda.</p>';

  const datesRow = document.createElement('div');
  datesRow.className = 'dates-row-wrapper';
  datesRow.innerHTML = '<button class="date-nav" id="prev-date"><</button><div class="dates-row" id="dates-container"></div><button class="date-nav" id="next-date">></button>';
  datePanel.appendChild(datesRow);
  container.appendChild(datePanel);

  const hourPanel = document.createElement('section');
  hourPanel.className = 'booking-panel';
  hourPanel.innerHTML = '<p class="booking-panel-title">3. Selecciona horario</p>';

  const hoursContainer = document.createElement('div');
  hoursContainer.id = 'hours-container';
  hourPanel.appendChild(hoursContainer);
  container.appendChild(hourPanel);

  function renderDates() {
    const datesContainer = document.getElementById('dates-container');
    if (!datesContainer) return;

    datesContainer.innerHTML = '';
    const dates = getAvailableDatesPage(datePage);

    dates.forEach(date => {
      const btn = document.createElement('button');
      btn.className = 'date-btn';
      btn.textContent = date.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short' });

      if (state.selectedDate && dateToYMD(state.selectedDate) === dateToYMD(date)) btn.classList.add('active');

      btn.addEventListener('click', () => {
        state.selectedDate = date;
        state.selectedTime = null;
        state.selectedShift = null;
        renderBookingStep();
      });

      datesContainer.appendChild(btn);
    });

    const prevDateBtn = document.getElementById('prev-date');
    if (prevDateBtn) prevDateBtn.disabled = datePage <= 0;
  }

  const prevDateBtn = document.getElementById('prev-date');
  const nextDateBtn = document.getElementById('next-date');

  if (prevDateBtn) {
    prevDateBtn.addEventListener('click', () => {
      if (datePage > 0) {
        datePage -= 1;
        renderDates();
      }
    });
  }

  if (nextDateBtn) {
    nextDateBtn.addEventListener('click', () => {
      datePage += 1;
      renderDates();
    });
  }

  renderDates();

  async function renderHours(date) {
    if (!state.selectedCollaborator) {
      hoursContainer.innerHTML = '<p class="empty">Selecciona un tecnico para ver horarios.</p>';
      return;
    }

    hoursContainer.innerHTML = '<h4>Franjas disponibles</h4>';
    const hoursLoader = document.createElement('div');
    hoursLoader.className = 'hours-loader';
    hoursLoader.innerHTML = '<span class="hours-loader-spinner" aria-hidden="true"></span><span>Cargando horarios...</span>';
    hoursContainer.appendChild(hoursLoader);

    const grid = document.createElement('div');
    grid.className = 'hours-grid shift-grid';
    grid.style.display = 'none';
    hoursContainer.appendChild(grid);

    const renderShiftCapsules = slotsByShift => {
      if (hoursLoader.isConnected) hoursLoader.remove();
      grid.style.display = 'grid';

      if (state.selectedShift && slotsByShift[state.selectedShift].length === 0) {
        state.selectedShift = null;
        state.selectedTime = null;
      }

      grid.innerHTML = '';
      const todayYMD = dateToYMD(new Date());
      const selectedYMD = dateToYMD(date);
      const isTodaySelected = todayYMD === selectedYMD;
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      SHIFT_WINDOWS.forEach(shift => {
        const shiftSlots = slotsByShift[shift.id] || [];
        const blockedByTime = isTodaySelected && currentMinutes >= shift.start;
        const hasAvailability = shiftSlots.length > 0 && !blockedByTime;
        const selected = state.selectedShift === shift.id && hasAvailability;
        const statusText = blockedByTime ? 'Ya paso esta hora' : (hasAvailability ? 'Disponible' : 'Sin cupos');

        const shiftBtn = document.createElement('button');
        shiftBtn.className = `slot shift-capsule${selected ? ' selected' : ''}${hasAvailability ? '' : ' disabled'}`;
        shiftBtn.type = 'button';
        shiftBtn.setAttribute('aria-disabled', String(!hasAvailability));
        shiftBtn.innerHTML = `<span class="shift-title">${shift.displayLabel || shift.label}</span><span class="shift-meta">${statusText}</span>`;

        if (hasAvailability) {
          shiftBtn.addEventListener('click', () => {
            state.selectedShift = shift.id;
            state.selectedTime = shift.label;
            grid.querySelectorAll('.shift-capsule.selected').forEach(item => item.classList.remove('selected'));
            shiftBtn.classList.add('selected');
          });
        } else {
          const disabledMessage = blockedByTime
            ? 'Este horario ya no esta disponible para hoy.'
            : 'Este horario ya esta reservado.';
          shiftBtn.addEventListener('click', () => showReservedSlotModal(disabledMessage));
        }

        grid.appendChild(shiftBtn);
      });
    };

    try {
      const dateKey = dateToYMD(date);
      const response = await fetch(`${API_URL}?barbero=${state.selectedCollaborator}&fecha=${dateKey}`);
      const data = await response.json();

      state.selectedBarberWhatsapp = data.whatsapp || null;
      const slots = [...new Set((data.slots || []).filter(Boolean))];

      const slotsByShift = { morning: [], midday: [], afternoon: [] };
      const slotsSet = new Set(slots.map(slot => String(slot).trim().toLowerCase()));
      SHIFT_WINDOWS.forEach(shift => {
        if (slotsSet.has(shift.label.toLowerCase())) slotsByShift[shift.id].push(shift.label);
      });

      if (!state.selectedShift && state.selectedTime) {
        const shiftFromLabel = SHIFT_WINDOWS.find(item => item.label === state.selectedTime)?.id;
        const shiftFromTime = shiftFromLabel || getShiftIdForMinutes(parseSlotToMinutes(state.selectedTime));
        if (shiftFromTime && slotsByShift[shiftFromTime].length > 0) {
          state.selectedShift = shiftFromTime;
        }
      }

      if (state.selectedShift && slotsByShift[state.selectedShift].length > 0) {
        const selectedShiftObj = SHIFT_WINDOWS.find(item => item.id === state.selectedShift);
        state.selectedTime = selectedShiftObj ? selectedShiftObj.label : slotsByShift[state.selectedShift][0];
      }

      renderShiftCapsules(slotsByShift);
    } catch (error) {
      renderShiftCapsules({ morning: [], midday: [], afternoon: [] });
      const errorNote = document.createElement('p');
      errorNote.className = 'empty';
      errorNote.textContent = 'Error cargando horarios. Intenta de nuevo.';
      hoursContainer.appendChild(errorNote);
    }
  }

  if (state.selectedDate) renderHours(state.selectedDate);
  else hoursContainer.innerHTML = '<p class="empty">Selecciona una fecha para ver horarios.</p>';
}

async function submitBooking(confirmBtn) {
  const name = (state.clientName || '').trim();
  const phone = (state.clientPhone || '').trim();
  const address = (state.clientAddress || '').trim();

  if (!name || !phone || !address) {
    showToast('Completa nombre, telefono y direccion en el Paso 1.');
    return;
  }

  confirmBtn.disabled = true;
  confirmBtn.textContent = 'Agendando...';

  const bookingPayload = {
    action: 'agendar',
    name,
    phone,
    barber: state.selectedCollaborator,
    date: dateToYMD(state.selectedDate),
    time: state.selectedTime,
    services: state.cart.map(item => item.serviceObj.title),
    address
  };

  const sendBookingInBackground = async () => {
    const raw = JSON.stringify(bookingPayload);
    let beaconSent = false;

    // sendBeacon es mas confiable cuando se va a redirigir de inmediato.
    try {
      if (navigator.sendBeacon) {
        beaconSent = navigator.sendBeacon(API_URL, raw);
      }
    } catch (error) {
      beaconSent = false;
    }

    // Respaldo adicional en segundo plano con keepalive.
    const request = fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      body: raw
    }).catch(() => {});

    if (!beaconSent) {
      await Promise.race([request, wait(350)]);
      return;
    }

    // Pausa minima para dejar despachar el beacon antes de salir.
    await wait(80);
  };

  const selectedTechnician = collaborators.find(c => c.id === state.selectedCollaborator);
  const fechaBonita = state.selectedDate
    ? state.selectedDate.toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : 'No especificada';
  const selectedServicesText = state.cart
    .map((item, index) => `${index + 1}. ${item.serviceObj.title}`)
    .join('\n');

  const waMessage = encodeURIComponent(
    `✨ *Nueva solicitud de limpieza* ✨\n\n` +
    `Hola, soy *${name}* y quiero agendar mi servicio.\n\n` +
    `🧺 *Articulos a lavar:*\n${selectedServicesText}\n\n` +
    `📅 *Fecha:* ${fechaBonita}\n` +
    `🕒 *Horario:* ${getSelectedShiftLabel()}\n` +
    `👨‍🔧 *Tecnico:* ${selectedTechnician ? selectedTechnician.name : 'No especificado'}\n\n` +
    `📍 *Direccion:* ${address}\n` +
    `📞 *Telefono:* ${phone}\n\n` +
    '💬 Estare atento a tu respuesta, me interesa mucho lavar estos articulos.'
  );

  const technicianWhatsapp = state.selectedBarberWhatsapp || '';

  if (technicianWhatsapp) {
    confirmBtn.textContent = 'Redirigiendo a WhatsApp...';
    await sendBookingInBackground();
    window.location.assign(`https://wa.me/${technicianWhatsapp}?text=${waMessage}`);
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingPayload)
    });

    let result = null;
    try { result = await response.json(); } catch (error) { result = null; }

    if (result && result.success) showToast('Cita registrada correctamente.', 'success');
    else if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: 'Cita agendada',
        text: 'Tu solicitud se registro correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#d4aa2f',
        background: '#111111',
        color: '#f5f5f5'
      });
    }
  } catch (error) {
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: 'Cita agendada',
        text: 'Tu solicitud se registro correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#d4aa2f',
        background: '#111111',
        color: '#f5f5f5'
      });
    }
  }

  resetApp();

  showToast('WhatsApp no disponible para el tecnico seleccionado.');

  confirmBtn.disabled = false;
  confirmBtn.textContent = 'Finalizar y enviar a WhatsApp';
}

function renderClientForm() {
  const container = document.getElementById('cart-contents');
  const nextBtn = document.getElementById('next-step');
  if (!container) return;

  container.innerHTML = '';
  if (nextBtn) nextBtn.style.display = 'none';

  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn';
  backBtn.textContent = 'Volver a agenda';
  backBtn.addEventListener('click', renderBookingStep);
  container.appendChild(backBtn);

  const title = document.createElement('h3');
  title.textContent = 'Confirma tu solicitud';
  container.appendChild(title);

  const technician = collaborators.find(c => c.id === state.selectedCollaborator);
  const fechaBonita = state.selectedDate
    ? state.selectedDate.toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : 'No especificada';

  const summary = document.createElement('div');
  summary.className = 'booking-summary';
  summary.innerHTML = `
    <p><span>Cliente:</span>${state.clientName || ''}</p>
    <p><span>Telefono:</span>${state.clientPhone || ''}</p>
    <p><span>Direccion:</span>${state.clientAddress || ''}</p>
    <p><span>Articulo(s):</span>${state.cart.map(item => item.serviceObj.title).join(', ')}</p>
    <p><span>Tecnico:</span>${technician ? technician.name : 'No especificado'}</p>
    <p><span>Fecha:</span>${fechaBonita}</p>
    <p><span>Horario:</span>${getSelectedShiftLabel()}</p>
    <p><span>Nota:</span>Estare atento a tu respuesta, me interesa mucho lavar estos articulos.</p>
  `;
  container.appendChild(summary);

  const confirmBtn = document.createElement('button');
  confirmBtn.className = 'confirm-btn';
  confirmBtn.type = 'button';
  confirmBtn.textContent = 'Finalizar y enviar a WhatsApp';
  confirmBtn.addEventListener('click', () => submitBooking(confirmBtn));
  container.appendChild(confirmBtn);
}

function resetApp() {
  state = {
    filtered: services.slice(),
    page: 1,
    pageCount: 1,
    currentStep: 1,
    cart: [],
    selectedCollaborator: null,
    selectedDate: null,
    selectedTime: null,
    selectedShift: null,
    clientName: null,
    clientPhone: null,
    clientAddress: null,
    selectedBarberWhatsapp: null
  };

  const nameInput = document.getElementById('client-name');
  const phoneInput = document.getElementById('client-phone');
  const addressInput = document.getElementById('client-address');
  if (nameInput) nameInput.value = '';
  if (phoneInput) phoneInput.value = '';
  if (addressInput) addressInput.value = '';

  setDisplay('#client-form-section', 'block');
  hideServiceStage();

  const drawer = document.getElementById('drawer');
  if (drawer) drawer.classList.remove('open');

  const searchInput = document.getElementById('search');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.pill').forEach(btn => btn.classList.remove('active'));
  const allPill = document.querySelector('.pill[data-cat="all"]');
  if (allPill) allPill.classList.add('active');

  setActiveStep(1);
  renderServices();
  renderCart();
}

(function init() {
  renderCategories();
  renderServices();
  renderCart();
  setActiveStep(1);
  hideServiceStage();

  const formNextBtn = document.getElementById('form-next');
  if (formNextBtn) {
    formNextBtn.addEventListener('click', () => {
      const name = (document.getElementById('client-name')?.value || '').trim();
      const phone = (document.getElementById('client-phone')?.value || '').trim();
      const address = (document.getElementById('client-address')?.value || '').trim();

      if (!name || !phone || !address) {
        showToast('Completa nombre, telefono y direccion para continuar.');
        return;
      }

      state.clientName = name;
      state.clientPhone = phone;
      state.clientAddress = address;
      navigateToStep(2, { bypassGuards: true });
      showToast('Paso 2 activo. Elige el articulo que deseas lavar.', 'success');
    });
  }

  const nameInput = document.getElementById('client-name');
  const phoneInput = document.getElementById('client-phone');
  const addressInput = document.getElementById('client-address');
  [nameInput, phoneInput, addressInput].forEach(input => {
    if (input) input.addEventListener('input', syncClientStateFromInputs);
  });

  document.querySelectorAll('.workflow-step').forEach(stepEl => {
    const targetStep = Number(stepEl.getAttribute('data-step') || '1');
    stepEl.setAttribute('role', 'button');
    stepEl.setAttribute('tabindex', '0');
    stepEl.addEventListener('click', () => navigateToStep(targetStep, { strictForward: true }));
    stepEl.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        navigateToStep(targetStep, { strictForward: true });
      }
    });
  });

  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.page = 1;
      renderServices();
    });
  }

  const prevBtn = document.getElementById('prev-page');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.page > 1) {
        state.page -= 1;
        renderServices();
      }
    });
  }

  const nextBtn = document.getElementById('next-page');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (state.page < state.pageCount) {
        state.page += 1;
        renderServices();
      }
    });
  }

  const cartToggle = document.getElementById('cart-toggle');
  if (cartToggle) {
    cartToggle.addEventListener('click', () => {
      navigateToStep(3);
    });
  }

  const drawerClose = document.getElementById('drawer-close');
  if (drawerClose) {
    drawerClose.addEventListener('click', () => {
      const drawer = document.getElementById('drawer');
      if (drawer) drawer.classList.remove('open');
    });
  }

  const nextStep = document.getElementById('next-step');
  if (nextStep) {
    nextStep.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Primero selecciona al menos un articulo.');
        return;
      }

      if (!state.selectedCollaborator || !state.selectedDate || !state.selectedTime) {
        renderBookingStep();
        return;
      }

      renderClientForm();
    });
  }
})();
