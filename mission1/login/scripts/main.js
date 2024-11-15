import { isValidemail, isValidpassword, checkInputInLogin } from "../../scripts/validation.js";
import { showInputError, hideErrorMessage, updatePasswordtype } from "../../scripts/ui-controller.js";


const emailInput = document.querySelector('#email');
const errorEmail = document.querySelector('#email-error');
const passwordInput = document.querySelector('#password');
const errorPassword = document.querySelector('#password-error');


// 에러체크(email)
emailInput.addEventListener('focusout', () => {
  const emailValue = emailInput.value.trim();

  if(emailValue === '') {  // 값이 공백
    showInputError(emailInput, errorEmail);
    errorEmail.textContent = '이메일을 입력해주세요.';
  } else if(isValidemail(emailValue) === false) {  //이메일 형식에 맞지 않을 때
    showInputError(emailInput, errorEmail);
    errorEmail.textContent = '잘못된 이메일입니다.';
  } else { 
    hideErrorMessage(emailInput, errorEmail);
  }
});

emailInput.addEventListener('input', () => {  // 이메일 형식에 적합하게 입력했을 때 error삭제
  const emailValue = emailInput.value.trim();
  
  if(isValidemail(emailValue)) {
    hideErrorMessage(emailInput, errorEmail);
  }
});


// 에러체크(password)
passwordInput.addEventListener('input', () => {
  const passwordValue = passwordInput.value.trim();

  if(passwordValue === '') {  // 값이 공백일 때
    showInputError(passwordInput, errorPassword);
    errorPassword.textContent = '비밀번호를 입력해주세요.';
  } else if(isValidpassword(passwordValue)) {  // 값이 8자리 이하일 때
    showInputError(passwordInput, errorPassword); 
    errorPassword.textContent = '비밀번호를 8자 이상 입력해주세요.';
  } else {
    hideErrorMessage(passwordInput, errorPassword);
  }
});

passwordInput.addEventListener('focusout', () => {
  const passwordValue = passwordInput.value.trim();

  if(passwordValue === '') {
    showInputError(passwordInput, errorPassword);
    errorPassword.textContent = '비밀번호를 입력해주세요.';
  }
});


// password의 눈 이미지 클릭
const checkPasswordBtn = document.querySelector('.check-password--img__button');
checkPasswordBtn.addEventListener('click', updatePasswordtype);


// login-botton 활성화
emailInput.addEventListener('input', checkInputInLogin);
passwordInput.addEventListener('input', checkInputInLogin);


// 페이지 이동 (미완성)
const loginBtn = document.querySelector('.login-button');
loginBtn.addEventListener('click', () => {
  if (!loginBtn.disabled) {
    window.location.href = '/items';
  }
});