import myPromise from "./myPromise";

const myAjax = (url, payload) => {
  return new myPromise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
   
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 400) {
          console.log("Error status:", xhr.status);
          reject(xhr.statusText)
        } else {
          console.log("Completion status:", xhr.status);
          resolve(xhr.response)
        }

        xhr.onerror = () => {
          reject(xhr.statusText)
        }
      }
    };
    xhr.open(payload.type, url, true);
    xhr.send(payload.data);
  });
};

export default myAjax;
