document.addEventListener('DOMContentLoaded', function() {
    var roomPhotos = {
        'Single Room': [
            "images/single.jpg"
        ],
        'Standard Room': [
            "images/standard.jpg"
        ],
        'Deluxe Room': [
            "images/deluxe.jpg"
        ],
        'Super Deluxe Room': [
            "images/superdeluxe.jpg"
        ],
        'Super Deluxe with lanai Room': [
            "images/lanai.jpg",
            "images/lanai1.jpg",
            "images/lanai2.jpg"
        ]
    };

    var currentRoom = '';
    var currentPhotoIndex = 0;

    function populateModal(roomType) {
        var carouselInner = document.getElementById('carousel-inner');
        carouselInner.innerHTML = '';
        currentRoom = roomType;

        roomPhotos[roomType].forEach(function(photo, index) {
            var carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === currentPhotoIndex) {
                carouselItem.classList.add('active');
            }

            var img = document.createElement('img');
            img.src = photo;
            img.classList.add('d-block', 'w-100', 'h-100');
            img.alt = roomType + ' Photo';

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        });

        document.getElementById('prevBtn').disabled = (currentPhotoIndex === 0);
        document.getElementById('nextBtn').disabled = (currentPhotoIndex === roomPhotos[roomType].length - 1);
    }

    var photoModal = document.getElementById('photoModal');
    photoModal.addEventListener('shown.bs.modal', function(event) {
        var button = event.relatedTarget;
        var roomType = button.getAttribute('data-room');
        document.getElementById('photoModalLabel').innerText = roomType + ' Photos';
        populateModal(roomType);
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        if (currentPhotoIndex > 0) {
            currentPhotoIndex--;
            populateModal(currentRoom);
        }
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        if (currentPhotoIndex < roomPhotos[currentRoom].length - 1) {
            currentPhotoIndex++;
            populateModal(currentRoom);
        }
    });
});