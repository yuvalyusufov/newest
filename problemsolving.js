$("#takanon_sortable").on("focus", ".editContent", function (e) {
  $("ol")
    .sortable({
      disabled: true,
    })
    .enableSelection();

  $(this).css("cursor", "auto");

  let selection = window.getSelection();
  let range = document.createRange();
  selection.removeAllRanges();
  range.selectNodeContents(e.target);
  range.collapse(false);
  selection.addRange(range);
  // el.focus();
});

// function AddSortable() {

//     $("ul").sortable({
//         connectWith: "ul",
//         disabled: false
//     }).disableSelection();

//     return false;
// };

// function RemoveSortable(){

//     $("ul").sortable({
//         disabled: true
//     }).enableSelection();

//     return false;
// }





// function sortableEnable() {
//     $( "ul" ).sortable();
//     $( "ul" ).sortable( "option", "disabled", false );
//     $( "li" ).attr("contentEditable","false");
//     $( "li" ).css("cursor","move");
//     return false;
// }

// function sortableDisable() {
//     $( "ul" ).sortable("disable");
//     $( "li" ).attr("contentEditable","true");
//     $( "li" ).css("cursor","default");
//     return false;
// }

// $(function() {
//     sortableEnable();
// });