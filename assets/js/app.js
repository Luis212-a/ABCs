'use strict';

/* ══════════════════════════════════════════════════════════════════════
   APP.JS — ABC Solar main script
   Extracted from inline script. All event listeners here; no inline
   onclick/onsubmit/oninput in the HTML.
═════════════════════════════════════════════════════════════════════ */

/* ══ THEME — runs immediately to prevent FOUC ══ */
var html = document.documentElement;
var THEME_KEY = 'abc-theme';

(function initTheme() {
  var saved = localStorage.getItem(THEME_KEY);
  var sysPref = window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark';
  applyTheme(saved || sysPref);
}());

function applyTheme(t) {
  html.setAttribute('data-theme', t);
  var btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = t === 'dark' ? '🌙' : '☀️';
  ['navLogo', 'footerLogo'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.filter = t === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)';
  });
}

if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme:light)').addEventListener('change', function(e) {
    if (!localStorage.getItem(THEME_KEY)) applyTheme(e.matches ? 'light' : 'dark');
  });
}

/* ══ DOM READY ══ */
document.addEventListener('DOMContentLoaded', function() {

  /* ── THEME BUTTON ── */
  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      var cur = html.getAttribute('data-theme');
      var next = cur === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ── NAV: SLIM ON SCROLL ── */
  window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('slim', window.scrollY > 40);
  }, { passive: true });

  /* ── MOBILE MENU ── */
  function openMob() {
    var menu = document.getElementById('mobMenu');
    if (!menu) return;
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
    var ham = document.querySelector('.ham');
    if (ham) {
      ham.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translateY(7px)';
      ham.querySelector('span:nth-child(2)').style.opacity = '0';
      ham.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translateY(-7px)';
    }
  }

  function closeMob() {
    var menu = document.getElementById('mobMenu');
    if (!menu) return;
    menu.classList.remove('open');
    document.body.style.overflow = '';
    var ham = document.querySelector('.ham');
    if (ham) {
      ham.querySelector('span:nth-child(1)').style.transform = '';
      ham.querySelector('span:nth-child(2)').style.opacity = '1';
      ham.querySelector('span:nth-child(3)').style.transform = '';
    }
  }

  var ham = document.querySelector('.ham');
  if (ham) {
    ham.addEventListener('click', function() {
      var isOpen = document.getElementById('mobMenu').classList.contains('open');
      isOpen ? closeMob() : openMob();
    });
    ham.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMob(); }
    });
  }

  var mobClose = document.getElementById('mobClose');
  if (mobClose) mobClose.addEventListener('click', closeMob);

  document.querySelectorAll('.mob-menu a').forEach(function(link) {
    link.addEventListener('click', closeMob);
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var menu = document.getElementById('mobMenu');
      if (menu && menu.classList.contains('open')) closeMob();
    }
  });

  /* ── SCROLL ARROW ── */
  var scrollArrow = document.getElementById('scrollArrow');
  if (scrollArrow) {
    scrollArrow.addEventListener('click', function() {
      var target = document.getElementById('numbers');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── TABS ── */
  function setTab(i) {
    document.querySelectorAll('.tab-content').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    var tab = document.getElementById('tab' + i);
    var btns = document.querySelectorAll('.tab-btn');
    if (tab) tab.classList.add('active');
    if (btns[i]) btns[i].classList.add('active');
  }

  document.querySelectorAll('.tab-btn').forEach(function(btn, i) {
    btn.addEventListener('click', function() { setTab(i); });
  });

  /* ── VIDEO MODAL ── */
  /* Replace empty string with your YouTube video ID, e.g. 'dQw4w9WgXcQ' */
  var YOUTUBE_ID = '';

  function openVideoModal() {
    var modal = document.getElementById('videoModal');
    var iframe = document.getElementById('ytPlayer');
    if (iframe && YOUTUBE_ID) {
      iframe.src = 'https://www.youtube.com/embed/' + YOUTUBE_ID + '?autoplay=1&rel=0&modestbranding=1&vq=hd1080';
    }
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  function closeVideoModal() {
    var modal = document.getElementById('videoModal');
    var iframe = document.getElementById('ytPlayer');
    if (iframe) iframe.src = '';
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.video-open-btn').forEach(function(btn) {
    btn.addEventListener('click', openVideoModal);
  });

  var videoCloseBtn = document.getElementById('videoCloseBtn');
  if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeVideoModal);

  var videoModal = document.getElementById('videoModal');
  if (videoModal) {
    videoModal.addEventListener('click', function(e) {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeVideoModal();
  });

  /* ── TESTIMONIALS SCROLL ── */
  var testPrev = document.getElementById('testPrev');
  var testNext = document.getElementById('testNext');
  if (testPrev) {
    testPrev.addEventListener('click', function() {
      var t = document.getElementById('testTrack');
      if (t) t.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }
  if (testNext) {
    testNext.addEventListener('click', function() {
      var t = document.getElementById('testTrack');
      if (t) t.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  /* ── FAQ ── */
  function toggleFaq(item) {
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
    if (!isOpen) item.classList.add('open');
  }

  document.querySelectorAll('.faq-q').forEach(function(q) {
    q.addEventListener('click', function() { toggleFaq(q.parentElement); });
    q.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(q.parentElement); }
    });
  });

  /* ── FORM: COTIZACION → WHATSAPP ── */
  function validateFormField(input) {
    if (!input) return true;
    var isValid = input.value.trim() !== '';
    if (!isValid) {
      input.classList.add('error');
      var errorMsg = input.parentElement.querySelector('.form-error');
      if (!errorMsg) {
        errorMsg = document.createElement('span');
        errorMsg.className = 'form-error';
        errorMsg.style.cssText = 'display:block;font-size:0.85rem;color:#ef5350;margin-top:4px;';
        var labelSibling = input.parentElement.querySelector('label');
        input.parentElement.insertBefore(errorMsg, input.nextSibling);
      }
      var fieldName = input.id.replace('campo-', '').replace('reciboInput', 'monto');
      errorMsg.textContent = 'Por favor, completa este campo.';
    } else {
      input.classList.remove('error');
      var err = input.parentElement.querySelector('.form-error');
      if (err) err.remove();
    }
    return isValid;
  }

  var form = document.getElementById('cotizacionForm');
  if (form) {
    var requiredFields = ['#campo-nombre', '#campo-telefono', '#campo-correo'];
    requiredFields.forEach(function(selector) {
      var input = form.querySelector(selector);
      if (input) {
        input.addEventListener('blur', function() { validateFormField(this); });
        input.addEventListener('input', function() {
          if (this.classList.contains('error') && this.value.trim()) {
            this.classList.remove('error');
            var err = this.parentElement.querySelector('.form-error');
            if (err) err.remove();
          }
        });
      }
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var nombre   = form.querySelector('#campo-nombre');
      var telefono = form.querySelector('#campo-telefono');
      var correo   = form.querySelector('#campo-correo');

      var isFormValid = validateFormField(nombre) &&
                        validateFormField(telefono) &&
                        validateFormField(correo);

      if (!isFormValid) {
        nombre.parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      var b = document.getElementById('submitBtn');
      b.classList.add('btn-submitting');
      b.disabled = true;
      b.innerHTML = '<span class="submit-spinner"></span> Enviando...';

      var nombreVal = nombre.value;
      var telefonoVal = telefono.value;
      var correoVal = correo.value;
      var tipo     = (form.querySelector('#campo-tipo') || {}).value     || '';
      var recibo   = (form.querySelector('#reciboInput') || {}).value    || '';
      var mensaje  = (form.querySelector('#campo-mensaje') || {}).value  || '';

      var waMsg = 'Hola, me contacto desde su página web www.abcsolar.com.mx.%0A%0A*Datos de contacto:*%0A'
        + 'Nombre: '              + encodeURIComponent(nombreVal)   + '%0A'
        + 'Teléfono: '            + encodeURIComponent(telefonoVal) + '%0A'
        + 'Correo: '              + encodeURIComponent(correoVal)   + '%0A'
        + 'Tipo de instalación: ' + encodeURIComponent(tipo)       + '%0A'
        + 'Recibo mensual: $'     + encodeURIComponent(recibo)      + '%0A'
        + 'Mensaje: '             + encodeURIComponent(mensaje || 'Sin mensaje adicional');

      setTimeout(function() {
        window.open('https://wa.me/527226220941?text=' + waMsg, '_blank');
        b.classList.remove('btn-submitting');
        b.classList.add('btn-success');
        b.innerHTML = '✓ ¡Listo! Te contactamos muy pronto';
        setTimeout(function() {
          b.classList.remove('btn-success');
          b.innerHTML = 'Quiero mi cotización gratis →';
          b.disabled = false;
          form.reset();
          calcular();
        }, 4000);
      }, 900);
    });
  }

  /* ── SOLAR CALCULATOR ── */
  var TARIFAS = {
    residencial:      { kwh: 2.20, nota: '⚡ Tarifa 1/DAC: subsidio escalonado. Bajo consumo ≈ $1.00/kWh; al pasar a DAC sube a $4–$7/kWh. Promedio ponderado típico mostrado.' },
    comercial_pdbt:   { kwh: 4.00, nota: '🏪 PDBT (hasta 25 kW): tarifa más común en negocios pequeños y medianos. Sin subsidio. Promedio nacional 2025: ~$4.00/kWh.' },
    comercial_gdbt:   { kwh: 4.20, nota: '🏢 GDBT (>25 kW baja tensión): tarifa para negocios con alta demanda. Incluye cargo por demanda + consumo. ~$3.50–$4.80/kWh.' },
    industrial_gdmto: { kwh: 3.20, nota: '🏭 GDMTO (media tensión ordinaria): tarifa industrial sin diferenciación horaria. ~$2.80–$3.80/kWh según región.' },
    industrial_gdmth: { kwh: 5.20, nota: '⚡ GDMTH (horaria): precios diferenciados. Punta: $5–$6.50/kWh. Solar elimina consumo en horas punta, máximo ahorro.' },
  };
  var KW_PANEL = 0.6, M2 = 2.4, HSP = 5.5, CO2F = 0.582, CO2A = 22;
  var CKWP = { residencial: 18500, comercial_pdbt: 16000, comercial_gdbt: 15000, industrial_gdmto: 14000, industrial_gdmth: 13500 };

  function fmt(n) { return '$' + Math.round(n).toLocaleString('es-MX'); }

  function calcular() {
    var reciboEl = document.getElementById('recibo');
    var tipoEl   = document.getElementById('tipo');
    var pctEl    = document.getElementById('pct');
    if (!reciboEl || !tipoEl || !pctEl) return;

    var recibo = parseFloat(reciboEl.value) || 0;
    var tipo   = tipoEl.value;
    var pct    = parseInt(pctEl.value);

    var pctLbl = document.getElementById('pct-lbl');
    if (pctLbl) pctLbl.textContent = pct + '%';

    var pv = ((pct - 40) / 60) * 100;
    pctEl.style.background = 'linear-gradient(to right,var(--sun) 0%,var(--sun) ' + pv + '%,var(--bdr) ' + pv + '%,var(--bdr) 100%)';

    var t = TARIFAS[tipo] || TARIFAS.residencial;
    var tnEl = document.getElementById('tariff-note');
    if (tnEl) tnEl.textContent = t.nota;

    if (recibo <= 0) return;

    var ahorroMes = recibo * (pct / 100);
    var ahorroA   = ahorroMes * 12;
    var costoA    = recibo * 12;
    var kwhNec    = (recibo / t.kwh) * (pct / 100);
    var kWp       = (kwhNec / 30) / HSP;
    var paneles   = Math.max(1, Math.ceil(kWp / KW_PANEL));
    var cap       = (paneles * KW_PANEL).toFixed(1);
    var esp       = (paneles * M2).toFixed(1);
    var inv       = parseFloat(cap) * (CKWP[tipo] || 18500);
    var roi       = ahorroMes > 0 ? (inv / ahorroMes / 12).toFixed(1) : '—';
    var co2       = Math.round(kwhNec * 12 * CO2F);
    var arb       = (co2 / CO2A).toFixed(1);

    var set = function(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; };
    set('rc-mensual',  fmt(recibo));
    set('rc-anual',    fmt(costoA) + '/año');
    set('rc-ahorro',   fmt(ahorroMes));
    set('rc-ahorro-a', fmt(ahorroA) + '/año');
    set('rc-co2',      co2 + ' kg');
    set('rc-arb',      '≈ ' + arb + ' árboles/año');
    set('r-paneles',   paneles);
    set('r-cap',       cap);
    set('r-esp',       esp);
    set('r-roi',       roi);

    /* Add result feedback animation */
    var resCards = document.querySelectorAll('.res-card');
    resCards.forEach(function(card) {
      card.classList.remove('pulse');
      void card.offsetWidth; /* Trigger reflow to restart animation */
      card.classList.add('pulse');
    });
  }

  ['recibo', 'tipo', 'pct'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', calcular);
      el.addEventListener('change', calcular);
    }
  });

  /* Initial calc + range slider fill */
  calcular();
  (function() {
    var s = document.getElementById('pct');
    if (!s) return;
    var v = ((parseInt(s.value) - 40) / 60) * 100;
    s.style.background = 'linear-gradient(to right,var(--sun) 0%,var(--sun) ' + v + '%,var(--bdr) ' + v + '%,var(--bdr) 100%)';
    var tn = document.getElementById('tariff-note');
    if (tn) tn.textContent = TARIFAS.residencial.nota;
  }());

  /* ── SCROLL REVEAL ── */
  var revObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('on'); revObs.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .stg').forEach(function(el) {
    revObs.observe(el);
  });

  /* ── COUNT-UP ANIMATION ── */
  function animCount(el) {
    var target = parseInt(el.dataset.target);
    var duration = 1800;
    var step = target / (duration / 16);
    var current = 0;
    var ti = setInterval(function() {
      current += step;
      if (current >= target) { current = target; clearInterval(ti); }
      el.textContent = Math.floor(current);
    }, 16);
  }

  var cObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { animCount(e.target); cObs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count-up').forEach(function(el) { cObs.observe(el); });

  /* ── CO2 LIVE COUNTER ── */
  (function() {
    var CO2_PER_SEC = 0.221;
    var now = new Date();
    var secToday = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    var co2 = secToday * CO2_PER_SEC;
    var el = document.getElementById('co2LiveCounter');
    if (!el) return;
    var prefersRM = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    el.textContent = Math.floor(prefersRM ? co2 + CO2_PER_SEC * 43200 : co2).toLocaleString('es-MX');
    if (prefersRM) return;
    setInterval(function() {
      co2 += CO2_PER_SEC;
      el.textContent = Math.floor(co2).toLocaleString('es-MX');
    }, 1000);
  }());

  /* ── STATES STAGGERED REVEAL ── */
  var prefersRM = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var stateObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var states = e.target.querySelectorAll('.stt.on');
        if (prefersRM) {
          states.forEach(function(s) { s.style.opacity = '1'; });
        } else {
          states.forEach(function(s, i) { setTimeout(function() { s.style.opacity = '1'; }, i * 40); });
        }
        stateObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  var sg = document.getElementById('statesGrid');
  if (sg) {
    if (!prefersRM) sg.querySelectorAll('.stt.on').forEach(function(s) { s.style.opacity = '0'; });
    stateObs.observe(sg);
  }

}); /* end DOMContentLoaded */
