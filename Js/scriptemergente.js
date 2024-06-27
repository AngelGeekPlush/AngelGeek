
        document.addEventListener('DOMContentLoaded', function() {
            // Muestra el emergente al cargar la página
            var emergente = document.getElementById('emergente');
            emergente.style.display = 'block';

            // Obtiene el elemento del botón de cierre y el botón "Entendido"
            var closeBtn = document.getElementsByClassName('close-btn')[0];
            var closeEmergenteBtn = document.getElementsByClassName('close-emergente')[0];

            // Cuando el usuario hace clic en el botón de cierre, se cierra el emergente
            closeBtn.onclick = function() {
                emergente.style.display = 'none';
            }

            // Cuando el usuario hace clic en el botón "Entendido", se cierra el emergente
            closeEmergenteBtn.onclick = function() {
                emergente.style.display = 'none';
            }

            // Cuando el usuario hace clic en cualquier lugar fuera del emergente, se cierra
            window.onclick = function(event) {
                if (event.target == emergente) {
                    emergente.style.display = 'none';
                }
            }
        });
