// zad 4.1

const getSampleClass = document.querySelectorAll('.sample_class');
function getTagsOfElements(elements) {
      let elementsArray = [];
      for (let i = 0; i < elements.length; i++) {
          elementsArray.push(elements[i].tagName);
      }
    return elementsArray;
}

console.log(getTagsOfElements(getSampleClass));

// zad 4.2

const getSampleId = document.querySelector('#sample_id');
function getClassesOfElement(element) {
      let idsArray = [];
      element.classList.forEach(one => {
         idsArray.push(one);
     });
     return idsArray;
}

console.log(getClassesOfElement(getSampleId));

// zad 4.3

const getElementsLi = document.querySelectorAll('.sample_class_2 li');
function getInnerTextsOfElements(elements) {
      let sampleClass2Array = [];
      elements.forEach(one => {
        sampleClass2Array.push(one.innerText);
      });
     return sampleClass2Array;
}

console.log(getInnerTextsOfElements(getElementsLi));

// zad 4.4

const getLinks = document.querySelectorAll('a');
function getAddressesOfElements(elements) {
     let linksArray = [];
     elements.forEach(one => {
          linksArray.push(one.getAttribute('href'));
      });
      return linksArray;
}

console.log(getAddressesOfElements(getLinks));

// zad 4.5

const children = document.querySelector('.sample_class_3').children;

console.log(getTagsOfElements(children));