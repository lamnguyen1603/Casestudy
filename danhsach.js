let namebook = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6", "Book 7", "Book 8", "Book 9", "Book 10",];
let sout;

function vebang(book) {
    sout = "<table border='0' width='500' cellspacing='0' cellpadding='0' style='margin:auto'>"
    for (let i = 0; i < book.length; i++) {
        sout = sout + "<tr>";
        sout = sout + "<td>" + book[i] + "</td>";
        sout = sout + "<td><button class='book' onclick='editbook(" + i + ")'>edit</button></td>";
        sout = sout + '<td><button onclick="deletebook(' + i + ' )">Delete</button></td>';
        sout = sout + "</tr>";
    }
    sout = sout + "</table>";
    document.getElementById('litbook').innerHTML = sout;

}

vebang(namebook)

function addBook() {
    let n = document.getElementById("book").value;
    if (n === '') {
        alert('cant add')
    } else {
        alert('more success')
        namebook.push(n)
        vebang(namebook)
        document.getElementById("book").value = ''
    }

}

function deletebook(i) {
    namebook.splice(i, 1)
    vebang(namebook)
}

function editbook(i) {
    document.getElementById('namebook').innerHTML = `
      <h3 style="text-align: center">Edit Book</h3>
      <input type="text" placeholder="Edit Product" id="name-edit">
          <button onclick = 'edit(${i})' >Save</button>`;
    let name = namebook[i]
    document.getElementById('name-edit').value = name;
}

function edit(i) {
    let nameEdit = document.getElementById('name-edit').value;
    namebook[i] = nameEdit;
    document.getElementById('litbook').innerHTML = ``;
    document.getElementById('namebook').innerHTML = ``;
    vebang(namebook);
}