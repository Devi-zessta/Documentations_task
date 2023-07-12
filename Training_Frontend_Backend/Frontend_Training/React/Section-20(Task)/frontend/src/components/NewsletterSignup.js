import { Form, useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  const fetcher=useFetcher();
  // console.log('data:',fetcher.data);
  // console.log('state:',fetcher.state);
  // console.log('form:',fetcher.Form);
  // console.log('load:',fetcher.load);
  // console.log('submit:',fetcher.submit);
  const data=fetcher.data;
  const state=fetcher.state;
  useEffect(()=>{
    if(data && data.message && state==='idle')
  {
    window.alert(data.message);
  }

  },[state,data])
  
  return (
    <fetcher.Form method="post" action="/newsletter"className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;