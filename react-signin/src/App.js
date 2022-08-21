import { useState } from 'react';
import './App.css';

function App() {
  const initialValues = {username: "",mailAddress: "",password: ""};
  const [formValues,setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);
  const [disabled,setDisabled] = useState({status:true,color:"#000"});

  const handleChange = e => {
    // console.log(e.target.name);
    const {name ,value} = e.target;
    setFormValues({ ...formValues, [name]: value });
    
    if(formValues.username !== "" && 
      formValues.mailAddress !== "" && 
      formValues.password !== ""){
        setDisabled({ ...disabled, status: false , color:"green" });
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // バリデーションチェック
    setFormErrors(validate(formValues))
    setIsSubmit(true);

    // alert(JSON.stringify(formValues));
    fetch('http://localhost:3000/src/Post.js',requestOptions);
  }

  const requestOptions = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(formValues)
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if(!values.username){
      errors.username = "ユーザー名を入力してください。";
    }
    if(!values.mailAddress){
      errors.mailAddress = "メールアドレスを入力してください"
    }else if(!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください"
    }
    if(!values.password){
      errors.password = "パスワードを入力してください"
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    } else if (values.password.length > 15) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    }
    return errors;
  }

  return (
    <div className="App">
      <div className="formContainer">
        <form method='post' onSubmit={(e)=>handleSubmit(e)}>
          <h1>ログインフォーム</h1>
          <hr />
          <div className="uiForm">
            <div className="formField">
              <label>ユーザー名</label>
              <input type="text" placeholder='ユーザー名' name='username' onChange={(e)=>handleChange(e)} />
            </div>
            <p className="errorMsg">{formErrors.username}</p>
            <div className="formField">
              <label>メールアドレス</label>
              <input type="text" placeholder='メールアドレス' name='mailAddress' onChange={(e)=>handleChange(e)} />
            </div>
            <p className="errorMsg">{formErrors.mailAddress}</p>
            <div className="formField">
              <label>パスワード</label>
              <input type="text" placeholder='パスワード' name='password' onChange={(e)=>handleChange(e)} />
            </div>
            <p className="errorMsg">{formErrors.password}</p>
            <button className="submitButton" disabled={disabled.status} style={{backgroundColor: disabled.color}}>ログイン</button>
            {Object.keys(formErrors).length === 0 && isSubmit && (
              <div className='magOK'>ログインに成功しました</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
