import React from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const FormT =({
  values,
  errors,
  touched,
  isSubmitting
}) =>(
  <div className="row">
    <div className="col-lg-4">
    <Form>
    <div className="form-group">
      <label>Email</label>
      <Field type="email" name="email" className="form-control" />
      <ErrorMessage className="text-danger" name="email" />
    </div>
      <div className="form-group">
        <label>Password</label>
        <Field type="password" name="password" className="form-control" />
        <ErrorMessage className="text-danger" name="password" />
      </div>
      <div className="form-group">
        <label>Select Gender</label>
        <Field
          name="gender"
          className="form-control"
          component="select"
          placeholder="Your Gender">
             <option value="male">Male</option>
             <option value="female">Female</option>
        </Field>
        <ErrorMessage className="text-danger" name="gender" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" disabled={isSubmitting} type="submit">Submit</button>
      </div>
    </Form>
    </div>
  </div>
)

const FormApp = withFormik({
mapPropsToValues({email, password, gender}){
  return{
    email: email || '',
    password: password || '',
    gender: gender || '',
  }
},
validationSchema: Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(9).required(),
  gender: Yup.string().required(),
  //.test('len', 'Must be exactly 5 characters', val => val.length === 5)
}),
handleSubmit(values, {resetForm, setErrors, setSubmitting}){
  setTimeout(()=>{
    if(values.email === 'test@ww.com'){
      setErrors({ email: 'already exist!'})
    }else{
      resetForm()
    }
    setSubmitting(false);
  },2000);
  console.log(values);
}
})(FormT);

export default FormApp;
