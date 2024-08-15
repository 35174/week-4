let library = [];

        function openModal() {
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('pages').value = '';
            document.getElementById('genre').value = '';
            document.getElementById('bookModal').style.display = "flex";
        }

        function closeModal() {
            document.getElementById('bookModal').style.display = "none";
        }

        function closeDetailsModal() {
            document.getElementById('detailsModal').style.display = "none";
        }

        function addBook() {
            let title = document.getElementById('title').value;
            let author = document.getElementById('author').value;
            let pages = parseInt(document.getElementById('pages').value);
            let genre = document.getElementById('genre').value;

            if (title && author && pages && genre) {
                let book = {
                    title: title,
                    author: author,
                    pages: pages,
                    genre: genre
                };
                library.push(book);
                displayBooks();
                closeModal();
            } else {
                alert('Please fill in all fields.');
            }
        }

        function searchBooks() {
            let filter = document.getElementById('searchFilter').value;
            let searchValue = document.getElementById('searchInput').value.toLowerCase();

            let searchResult = library.filter(book =>
                book[filter].toLowerCase().includes(searchValue)
            );
            displayBooks(searchResult);
        }

        function resetSearch() {
            document.getElementById('searchInput').value = '';
            displayBooks();
        }

        function displayBooks(books = library) {
            let bookList = document.getElementById('bookList');
            bookList.innerHTML = '';

            books.forEach((book, index) => {
                let bookDiv = document.createElement('div');
                bookDiv.classList.add('book');
                bookDiv.innerHTML = `<h3>${book.title}</h3>`;
                bookDiv.onclick = () => showBookDetails(index);
                bookList.appendChild(bookDiv);
            });
        }

        function showBookDetails(index) {
            let book = library[index];
            let bookDetails = document.getElementById('bookDetails');
            bookDetails.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
            `;
            document.getElementById('detailsModal').style.display = "flex";
        }