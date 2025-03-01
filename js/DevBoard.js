
// this is data storage. but I can't understand fully. 
// why we use this , if we use any array or other kind of variabl, is it work?
const storage = new Date();

// দিনের নাম এবং তারিখ আলাদা আলাদা ফরম্যাটে
const optionsDay = { weekday: 'short' };  // পূর্ণ দিনের নাম
const dayName = tata.toLocaleDateString('en-US', optionsDay);  // দিনের নাম
// দিন প্রদর্শন
document.getElementById("current-day").innerText = dayName;


const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };  // পূর্ণ তারিখ
const fullDate = tata.toLocaleDateString('en-US', optionsDate);  // তারিখ
// তারিখ প্রদর্শন
document.getElementById("current-date").innerText = fullDate;

    

    

