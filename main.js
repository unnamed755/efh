 const userName = prompt ("Ismingizni kiriting");
 const userFilter = prompt ("Qidirayotgan harfingizni kiritng");

 if(userName.includes (userFilter)){
    alert(`${userFilter} bor`)
 }
 else{
    alert(`${userName} ismida ${userFilter} harifi yo'q`)
 }

