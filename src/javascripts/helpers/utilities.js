import $ from 'jquery';

const printToDom = (divID, toPrint) => {
  $(`#${divID}`).html(toPrint);
};

export default { printToDom };
