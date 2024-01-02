export function extractDate(isoString) {
    // إنشاء كائن Date باستخدام السلسلة النصية الممثلة للتاريخ
    const dateObject = new Date(isoString);
  
    // استخراج التاريخ
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // يبدأ الشهر من 0
    const day = dateObject.getDate();
  
    // إرجاع التاريخ بتنسيق معين أو ككائن تاريخ
    // في هذا المثال، سأقوم بإرجاعه كنص بتنسيق "YYYY-MM-DD"
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    
    return formattedDate;
}

export function extractTime(isoString) {
    // إنشاء كائن Date باستخدام السلسلة النصية الممثلة للتاريخ
    const dateObject = new Date(isoString);
  
    // استخراج الساعة والدقائق والثواني
    const hours = dateObject.getUTCHours();
    const minutes = dateObject.getUTCMinutes();
    const seconds = dateObject.getUTCSeconds();
  
    // إرجاع الوقت بتنسيق معين
    // في هذا المثال، سأقوم بإرجاعه كنص بتنسيق "HH:MM:SS"
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    return formattedTime;
  }