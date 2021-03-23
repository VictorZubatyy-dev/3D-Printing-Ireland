
/*automatic slideshow js - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto*/
  var slideIndex = 0;
showSlides();

function showSlides()
 {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/*newsletter form validation*/
/*notes from class*/
function validateForm() 
{
  var email = document.forms["newsletter-form"]["e-mail"];

  if  (email.value == "")
  {
    window.alert("Please enter your e-mail address.");
    email.focus();
    return false;
  }

  if  (email.value.indexOf( "@" , 0) < 0)
  {
    window.alert("Please include '@' symbol in your e-mail.");
    email.focus();
    return false;
  }

  if  (email.value.indexOf("." + "com", 0) < 0)
  {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  else
  {
    window.alert("You have successfully signed up to our newsletter!");
    return true;
  }

  
}

/*email validation*/
/*notes from class*/
function validateEmail()
{
  var receiptemail = document.forms["order-form"] ["e-mail"];

  if(receiptemail.value == "")
  {
    window.alert("Please enter your e-mail address.");
    receiptemail.focus();
    return false;
  }
  if  (receiptemail.value.indexOf( "@" , 0) < 0)
  {
    window.alert("Please include '@' symbol in your e-mail.");
    receiptemail.focus();
    return false;
  }

  if  (receiptemail.value.indexOf("."+ "com", 0) < 0)
  {
    window.alert("Please enter a valid e-mail address.");
    receiptemail.focus();
    return false;
  }

  else
  {
    window.alert("Receipt has been successfully sent to your e-mail!");
    return true;
    
  }
}

/*notes from class*/
function validateContactForm() 
{
  var fname = document.forms["contact-us"]["f.name"];
  var lname = document.forms["contact-us"]["l.name"];
  var email = document.forms["contact-us"]["e-mail"];
  var phone = document.forms["contact-us"][".phone"];

  if  (fname.value == "") 
  {
    window.alert("Please enter your first name.");
    fname.focus();
    return false;
  }

  if  (lname.value == "")
  {
    window.alert("Please enter your surname.");
    lname.focus();
    return false;
  }


  if  (email.value == "")
  {
    window.alert("Please enter your e-mail address.");
    email.focus();
    return false;
  }
  if  (email.value.indexOf( "@" , 0) < 0)
  {
    window.alert("Please include '@' symbol in your e-mail.");
    email.focus();
    return false;
  }

  if  (email.value.indexOf("."+ "com", 0) < 0)
  {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if  (phone.value == "")
  {
    window.alert("Please enter your phone number.");
    phone.focus();
    return false;
  }

  else 
  {
    window.alert("Thank you for contacting us. We will respond to your enquiry as soon as possible.");
    return true;
  }

}



/*hit counter JS*/
/*Reference - https://www.codementor.io/@jamesezechukwu/how-to-create-a-simple-counter-using-javascript-html-css-bxcjgbbxa*/

  var counter_list = [10,10000,10000];
  var str_counter_0 = counter_list[0];
  var str_counter_1 = counter_list[1];
  var str_counter_2 = counter_list[2];
  var display_str = "";
  var display_div = document.getElementById("display_div_id");

  function incrementCount(current_count)
  {
    setInterval(function(){
      // clear count
      while (display_div.hasChildNodes()) 
      {
          display_div.removeChild(display_div.lastChild);
      }
      str_counter_0++;
      if (str_counter_0 > 99) 
      {
        str_counter_0 = 10; // reset count
        str_counter_1++;    // increase next count
      }
      if(str_counter_1>99999)
      {
        str_counter_2++;
      }
      display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
      for (var i = 0; i < display_str.length; i++)
       {
        var new_span = document.createElement('span');
        new_span.className = 'num_tiles';
        new_span.innerText = display_str[i];
        display_div.appendChild(new_span);
      }
    },1000);
  }