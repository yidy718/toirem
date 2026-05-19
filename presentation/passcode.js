(function () {
  var PASSCODE = '__TOIREM_PASSCODE__';
  var SESSION_KEY = 'toirem_auth';

  if (sessionStorage.getItem(SESSION_KEY) === 'true') return;

  document.documentElement.style.overflow = 'hidden';

  var style = document.createElement('style');
  style.textContent = [
    '#pc-overlay{position:fixed;inset:0;z-index:99999;background:#0f172a;display:flex;align-items:center;justify-content:center;font-family:Inter,system-ui,sans-serif}',
    '#pc-box{background:#1e293b;border:1px solid #334155;border-radius:16px;padding:48px 40px;width:300px;text-align:center}',
    '#pc-logo{font-size:26px;font-weight:700;color:#6366f1;letter-spacing:4px;margin-bottom:4px}',
    '#pc-sub{font-size:12px;color:#64748b;letter-spacing:1px;margin-bottom:32px}',
    '#pc-notice{font-size:13px;color:#64748b;margin-bottom:24px;line-height:1.6}',
    '#pc-link{color:#6366f1;text-decoration:none}',
    '#pc-link:hover{text-decoration:underline}',
    '#pc-label{font-size:14px;color:#94a3b8;margin-bottom:16px}',
    '#pc-input{width:100%;padding:12px 16px;border-radius:8px;border:1px solid #334155;background:#0f172a;color:#e2e8f0;font-size:16px;text-align:center;outline:none;box-sizing:border-box;margin-bottom:12px;letter-spacing:3px;font-family:inherit}',
    '#pc-input:focus{border-color:#6366f1}',
    '#pc-btn{width:100%;padding:12px;border-radius:8px;background:#6366f1;color:#fff;border:none;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit}',
    '#pc-btn:hover{background:#4f46e5}',
    '#pc-err{color:#f87171;font-size:13px;margin-top:12px;min-height:18px}'
  ].join('');
  document.head.appendChild(style);

  var overlay = document.createElement('div');
  overlay.id = 'pc-overlay';
  overlay.innerHTML = '<div id="pc-box"><div id="pc-logo">TOIREM</div><div id="pc-sub">Framework Portal</div><p id="pc-notice">This is a private document portal. To request access, contact <a href="mailto:yidy@pm.me" id="pc-link">yidy@pm.me</a></p><p id="pc-label">Enter passcode to continue</p><input id="pc-input" type="password" placeholder="Passcode" autocomplete="off" /><button id="pc-btn">Enter</button><p id="pc-err"></p></div>';

  function mount() {
    document.body.appendChild(overlay);
    setTimeout(function () { document.getElementById('pc-input').focus(); }, 50);
  }

  if (document.body) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }

  function check() {
    var val = document.getElementById('pc-input').value;
    if (val === PASSCODE) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      document.documentElement.style.overflow = '';
      overlay.remove();
    } else {
      document.getElementById('pc-err').textContent = 'Incorrect passcode';
      document.getElementById('pc-input').value = '';
      document.getElementById('pc-input').focus();
    }
  }

  overlay.addEventListener('click', function (e) {
    if (e.target.id === 'pc-btn') check();
  });
  overlay.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') check();
  });
})();
