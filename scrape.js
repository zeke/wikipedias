// Run this in the browser's js console at
// http://en.wikipedia.org/wiki/List_of_Wikipedias
// Wikipedia uses jQuery so we can use it. :)

JSON.stringify(
  $('tbody:eq(2) tr').map(function() {
    return {
      code:     $(this).find('td:eq(3)').text(),
      language: $(this).find('td:eq(1)').text(),
      script:   $(this).find('td:eq(2)').text(),
      name:     $(this).find('td:eq(0)').text(),
      size:     $(this).find('td:eq(4)').text()
    }
  }).get()
)