const productsData = [
    {
        id: 1,
        title: "Pastel Arcoiris Fantasia",
        price: "$65.000",
        image: "imagenes/05d437b5f41575284145be8bd61f0592.jpg"
    },
    {
        id: 2,
        title: "Cuadro Michi Personalizado",
        price: "$45.000",
        image: "imagenes/62dab9150da19ee14945594c12471ab2.jpg"
    },
    {
        id: 3,
        title: "Pastel Cumpleaños Rin Rin Renacuajo",
        price: "$70.000",
        image: "imagenes/06a155c0d472714dde7f9fe5adec1b9d.jpg"
    },
    {
        id: 4,
        title: "Arte Michi sacando Lenguita",
        price: "$65.000",
        image: "imagenes/4cc745c8f48470ddb47804efb36b9af8.jpg"
    },
    {
        id: 5,
        title: "Cuadro Michi Payaso",
        price: "$55.000",
        image: "imagenes/673641fa6765c831351e0ab7c4e52c32.jpg"
    },
    {
        id: 6,
        title: "Cuadro Michi Personalizado 2",
        price: "$45.000",
        image: "imagenes/714f51d545f4642e9b30bae5f4f75ac4.jpg"
    },
    {
        id: 7,
        title: "Pastel Cerecita",
        price: "$95.000",
        image: "imagenes/7d7e705a8e508f32b1100fccca2c6dc1.jpg"
    },
    {
        id: 8,
        title: "MichiCup x6",
        price: "$70.000",
        image: "imagenes/b4dc8721c6e928aef71f9cb979d9bd69.jpg"
    },
    {
        id: 9,
        title: "Pastel Huellitas y Michis",
        price: "$80.000",
        image: "imagenes/d6aefe1ed9d89292d40ae2426777d7c4.jpg"
    },
    {
        id: 10,
        title: "Pastel Michi Cumpleaños",
        price: "$85.000",
        image: "imagenes/f421dc723bcd8b14d0da1a04c6ef11b3.jpg"
    },
    {
        id: 11,
        title: "Retrato Personalizado Mascota",
        price: "$40.000",
        image: "imagenes/0e432cb4e5097dcf669ed5a9df82e7fe.jpg"
    }
];
let favorites = JSON.parse(localStorage.getItem('michis_favorites')) || [];

$(document).ready(function () {
    const $productsContainer = $('#products-container');
    const $detailContainer = $('#detail-container');
    const $favCountBadge = $('#favCount');
    const $favoritesListContainer = $('#favorites-list');
    const $emptyFavMsg = $('#empty-fav-msg');
    const $clearFavsBtn = $('#clearFavsBtn');
    const $favoritesModal = $('#favoritesModal');

    // Eventos
    $('#btnFavorites').on('click', function (e) {
        e.preventDefault();
        $favoritesModal.addClass('show');
    });

    $('#closeFavoritesModal, #closeFavoritesBtn').on('click', function (e) {
        e.preventDefault();
        $favoritesModal.removeClass('show');
    });

    // limpiar favoritos
    if ($clearFavsBtn.length) {
        $clearFavsBtn.on('click', function (e) {
            e.preventDefault();
            favorites = [];
            saveFavorites();
            updateFavUI();

            $('.btn-fav-toggle').removeClass('active text-white').css({ 'background': '', 'border-color': '' });

            if ($detailContainer.length) {
                $('.btn-fav-toggle').html(`<i class="fas fa-heart me-2"></i> Favoritos`);
            }
        });
    }

    // Validaciones de Formulario de Contacto
    const $contactForm = $('#contactForm');
    if ($contactForm.length) {
        $contactForm.on('submit', function (e) {
            e.preventDefault();

            // Ocultar mensajes con animación (slideUp)
            $('.error-msg, .success-msg').slideUp(200);

            let isValid = true;

            // Validar nombre
            const $nameInput = $('#contactName');
            const name = $nameInput.val().trim();
            if (name.length < 3) {
                $('#nameError').text('El nombre debe tener al menos 3 caracteres.').slideDown(200);
                isValid = false;
            } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) {
                $('#nameError').text('El nombre solo debe contener letras.').slideDown(200);
                isValid = false;
            }

            // Validar correo
            const $emailInput = $('#contactEmail');
            const email = $emailInput.val().trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                $('#emailError').text('Por favor, introduce un correo electrónico válido.').slideDown(200);
                isValid = false;
            }

            // Validar mensaje
            const $messageInput = $('#contactMessage');
            const message = $messageInput.val().trim();
            if (message.length < 10) {
                $('#messageError').text('El mensaje debe tener al menos 10 caracteres.').slideDown(200);
                isValid = false;
            }

            if (isValid) {
                $('#successMessage').slideDown(300);
                this.reset();

                setTimeout(() => {
                    $('#successMessage').slideUp(300);
                }, 5000);
            }
        });
    }

    function renderProducts() {
        $productsContainer.empty();

        $.each(productsData, function (index, product) {
            const isFav = favorites.includes(product.id);
            const cardHtml = `
                <div class="col-sm-6 col-lg-3" style="display: none;">
                    <div class="dynamic-card d-flex flex-column h-100 bg-white">
                        <a href="detalle.html?id=${product.id}" class="card-img-wrapper text-decoration-none bg-light d-flex align-items-center justify-content-center">
                            <img src="${product.image}" alt="${product.title}">
                        </a>
                        <div class="p-3 d-flex flex-column flex-grow-1">
                            <a href="detalle.html?id=${product.id}" class="text-decoration-none"><h3 class="card-title-custom mb-2">${product.title}</h3></a>
                            <p class="card-price-custom mb-3">${product.price}</p>
                            <div class="d-flex gap-2 mt-auto">
                                <a href="detalle.html?id=${product.id}" class="btn btn-light border flex-grow-1 text-decoration-none fw-medium text-dark d-flex align-items-center justify-content-center">Detalles</a>
                                <button class="btn btn-icon-custom shadow-none border btn-fav-toggle ${isFav ? 'active' : ''}" data-id="${product.id}">
                                    <i class="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            const $card = $(cardHtml);
            $productsContainer.append($card);

            // cascada de entrada
            $card.fadeIn(400 + (index * 100));
        });

        // boton favoritos
        $productsContainer.find('.btn-fav-toggle').off('click').on('click', function (e) {
            e.preventDefault();
            const productId = $(this).data('id');
            toggleFavorite(productId);
        });
    }

    function toggleFavorite(productId) {
        const index = favorites.indexOf(productId);
        const isFav = (index === -1);

        if (isFav) {
            favorites.push(productId);
        } else {
            favorites.splice(index, 1);
        }

        saveFavorites();
        updateFavUI();

        // actualizacion de estilos
        $('.btn-fav-toggle[data-id="' + productId + '"]').toggleClass('active', isFav);

        if ($detailContainer.length && $('.btn-fav-toggle').length && !$('#products-container').length) {

            const btn = $('.btn-fav-toggle');
            if (isFav) {
                btn.addClass('text-white active').css({ 'background': 'var(--color-pink)', 'border-color': 'var(--color-pink) !important' })
                    .html(`<i class="fas fa-heart me-2" style="color:white;"></i> Quitar Fav`);
            } else {
                btn.removeClass('text-white active').css({ 'background': '#fff', 'border-color': '' })
                    .html(`<i class="fas fa-heart me-2" style="color:var(--color-pink);"></i> Favoritos`);
            }
        }
    }

    window.toggleFavoriteGlobal = toggleFavorite;

    function saveFavorites() {
        localStorage.setItem('michis_favorites', JSON.stringify(favorites));
    }

    function updateFavUI() {
        $favCountBadge.text(favorites.length);

        $favCountBadge.css('transform', 'scale(1.3)');
        setTimeout(() => {
            $favCountBadge.css('transform', 'scale(1)');
        }, 200);

        $('.fav-item-row').remove();

        if (favorites.length === 0) {
            $emptyFavMsg.show();
            if ($clearFavsBtn.length) $clearFavsBtn.hide();
        } else {
            $emptyFavMsg.hide();
            if ($clearFavsBtn.length) $clearFavsBtn.show();

            $.each(favorites, function (i, favId) {
                const product = productsData.find(p => p.id === favId);
                if (product) {
                    const rowHtml = `
                        <div class="fav-item-row" style="display:none;">
                            <img src="${product.image}" alt="${product.title}">
                            <div class="info">
                                <p style="font-weight:600; font-size:14px; margin-bottom:2px">${product.title}</p>
                                <p style="color:var(--orange); font-size:14px;">${product.price}</p>
                            </div>
                            <button class="btn-remove-fav" data-id="${product.id}" style="background:none; border:none; color:#ff4d4f; cursor:pointer;">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    `;
                    const $item = $(rowHtml);
                    $favoritesListContainer.append($item);
                    $item.slideDown(200);
                }
            });

            // boton eliminar de favoritos
            $favoritesListContainer.find('.btn-remove-fav').off('click').on('click', function () {
                const id = $(this).data('id');
                toggleFavorite(id);
            });
        }
    }

    function renderProductDetail() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = productsData.find(p => p.id === productId);

        if (!product) {
            $detailContainer.html('<h2 class="text-center" style="grid-column: 1/-1;">Producto no encontrado</h1><p class="text-center" style="grid-column: 1/-1;"><a href="productos.html">Volver al catálogo</a></p>');
            return;
        }

        const isFav = favorites.includes(product.id);

        const detailHtml = `
            <div class="detail-layout row g-5 align-items-center" style="display: none;">
                <div class="col-lg-6">
                    <div class="card-img-wrapper shadow-lg" style="border-radius: 24px;">
                        <img src="${product.image}" alt="${product.title}" class="img-fluid w-100" style="object-fit:cover;">
                    </div>
                </div>
                <div class="col-lg-6">
                    <span class="badge w-auto rounded-pill bg-light pb-2 pt-2 px-3 mb-3 border text-uppercase" style="color: var(--color-purple); font-size:12px; letter-spacing:1px;">Producto Especial</span>
                    <h1 class="display-4 fw-bold mb-3" style="color: var(--color-purple);">${product.title}</h1>
                    <p class="display-6 fw-bold mb-4" style="color: var(--color-pink);">${product.price}</p>
                    
                    <p class="fs-5 text-muted mb-5 lh-lg">
                        Este hermoso producto está diseñado especialmente para los amantes de los gatos. Cada detalle ha sido cuidado para ofrecer la mejor calidad, y recuerda que un porcentaje de tu compra irá directamente a nuestra fundación aliada para ayudar a michis en situación de calle.
                    </p>
                    
                    <div class="d-flex gap-3 flex-wrap">
                        <a href="contacto.html" class="btn-primary-custom flex-grow-1 text-decoration-none d-flex align-items-center justify-content-center py-3 fs-5">
                            <i class="fab fa-whatsapp me-2 fs-4"></i> Contactar Compra
                        </a>
                        <button class="btn-icon-custom btn-fav-toggle fs-4 shadow-sm border ${isFav ? 'active' : ''}" data-id="${product.id}" style="width: auto; padding: 0 35px; border-radius: 50px;">
                            <i class="fas fa-heart me-2"></i> ${isFav ? 'Quitar Fav' : 'Favoritos'}
                        </button>
                    </div>
                </div>
            </div>
        `;

        $detailContainer.html(detailHtml);
        $('.detail-layout').fadeIn(600);

        $detailContainer.find('.btn-fav-toggle').off('click').on('click', function (e) {
            e.preventDefault();
            const id = $(this).data('id');
            toggleFavorite(id);
        });
    }

    // Inicializaciones
    if ($productsContainer.length) renderProducts();
    if ($detailContainer.length) renderProductDetail();
    updateFavUI();

    // Interacción navbar y scroll suave
    $('.nav-link').on('click', function (e) {
        const href = $(this).attr('href');
        
        if (href && href.includes('#')) {
            const hash = href.substring(href.indexOf('#'));
            
            if ($(hash).length > 0) {
                e.preventDefault();
                
                $('.nav-link').removeClass('active');
                $(this).addClass('active');

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 80
                }, 300);
            }
        } else {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Validar hash en carga inicial
    if (window.location.hash) {
        const targetHash = window.location.hash;
        
        if ($(targetHash).length) {
            $('.nav-link').removeClass('active');
            $('.nav-link[href*="' + targetHash + '"]').addClass('active');
            
            setTimeout(function() {
                window.scrollTo({
                    top: $(targetHash).offset().top - 80,
                    behavior: 'smooth'
                });
            }, 10);
        }
    }
});
