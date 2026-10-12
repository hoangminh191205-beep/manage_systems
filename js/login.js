// Login / sign-up form
let signup = new URLSearchParams(location.search).get('mode') === 'signup';

function setMode(s) {
  signup = s;
  $('#lt').textContent = s ? 'Create your account' : 'Welcome Back!';
  $('#ls').textContent = s ? 'Sign up to start organizing your work.' : 'Sign in to continue to your account.';
  $('#lh').textContent = s ? 'Create an account' : 'Login to your account';
  $('#sub').textContent = s ? 'Create Account' : 'Sign In';
  $('#at').textContent = s ? 'Already have an account?' : "Don't have an account?";
  $('#sw').textContent = s ? 'Sign in' : 'Create an account';
  $('#err').textContent = '';
}
setMode(signup);

$('#sw').addEventListener('click', () => setMode(!signup));

$('#show').addEventListener('click', () => {
  const p = $('#pw'), hidden = p.type === 'password';
  p.type = hidden ? 'text' : 'password';
  $('#show').textContent = hidden ? 'Hide' : 'Show';
});

$('#forgot').addEventListener('click', () => {
  $('#err').textContent = 'Password reset is not available in this demo.';
});

$('#lf').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('#em').value.trim(), pw = $('#pw').value;
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    $('#err').textContent = 'Enter a valid email address, like name@example.com.';
    return;
  }
  if (pw.length < 6) {
    $('#err').textContent = 'Password must be at least 6 characters.';
    return;
  }
  setUser(email, $('#rm').checked);
  alert(signup ? 'Account created successfully!' : 'Login successful!');
  location.href = 'home.html';
});
