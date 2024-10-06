document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;

    const formData = {
        name: name,
        email: email,
        phone: phone,
        age: age,
        city: city,
        address: address,
        gender: gender
    };

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = `
            <span class="text-green-500">Data saved successfully!</span>
            <br><a href="${data.filePath}" download class="text-indigo-600 underline">Download Excel File</a>
        `;
    })
    .catch(error => {
        document.getElementById('message').innerHTML = `<span class="text-red-500">Error saving data. Please try again.</span>`;
        console.error('Error:', error);
    });
});
