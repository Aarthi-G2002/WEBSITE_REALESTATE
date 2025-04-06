function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
  }
  
document.addEventListener('DOMContentLoaded', function() {
    // Sample property data
   const properties = [
        {
            id: 1,
            title: "Luxury Apartment in South Delhi",
            location: "South Delhi, Delhi",
            price: "₹1.2 Cr",
            type: "apartment",
            city: "delhi",
            budget: "100+",
            bhk: 3,
            beds: 3,
            baths: 2,
            area: "1800 sq.ft.",
            image: "image/apartmentd1.jpg",
            ownerContact: "+91 98765 43210"  
        },
         {
    id: 2,
    title: "Affordable 1 BHK in Rohini",
    location: "Rohini, Delhi",
    price: "₹45 Lakhs",
    type: "apartment",
    city: "delhi",
    budget: "0-50",
    bhk: 1,
    beds: 1,
    baths: 1,
    area: "650 sq.ft.",
    image: "image/apartmentd2.jpg",
    ownerContact: "9876543210"
},
    {
    id: 3,
    title: "Premium Penthouse in delhi",
    location: "Gurgaon, Haryana",
    price: "₹3.5 Cr",
    type: "apartment",
    city: "delhi",
    budget: "100+",
    bhk: 4,
    beds: 4,
    baths: 3,
    area: "3500 sq.ft.",
    image: "image/apartmentd3.jpg",
    ownerContact: "9876543210"
},

    {
    id: 4,
    title: "Luxury apartment in Vasant Kunj",
    location: "Vasant Kunj, Delhi",
    price: "₹5 Cr",
    type: "apartment",
    city: "delhi",
    budget: "100+",
    bhk: 5,
    beds: 5,
    baths: 4,
    area: "5000 sq.ft.",
    image: "image/apartmentd4.jpg",
    ownerContact: "9876543210"
},
    {
    id: 5,
    title: "Budget Villa in Dwarka",
    location: "Dwarka, Delhi",
    price: "₹85 Lakhs",
    type: "villa",
    city: "delhi",
    budget: "50-100",
    bhk: 3,
    beds: 3,
    baths: 2,
    area: "2200 sq.ft.",
    image: "image/villad1.jpg",
    ownerContact: "9876543210"
},
    {
    id: 6,
    title: "2 BHK Flat in Andheri East",
    location: "Andheri East, Mumbai",
    price: "₹1.1 Cr",
    type: "apartment",
    city: "mumbai",
    budget: "100+",
    bhk: 2,
    beds: 2,
    baths: 2,
    area: "950 sq.ft.",
    image: "image/apartmentm1.jpeg",
    ownerContact: "9876543210"
},
    {
    id: 7,
    title: "Compact 1 BHK in Borivali",
    location: "Borivali, Mumbai",
    price: "₹65 Lakhs",
    type: "apartment",
    city: "mumbai",
    budget: "50-100",
    bhk: 1,
    beds: 1,
    baths: 1,
    area: "550 sq.ft.",
    image: "image/apartmentm2.jpeg",
    ownerContact: "9876543210"
},
    {
    id: 8,
    title: "Sea-Facing apartment in Juhu",
    location: "Juhu, Mumbai",
    price: "₹8 Cr",
    type: "apartment",
    city: "mumbai",
    budget: "100+",
    bhk: 6,
    beds: 6,
    baths: 5,
    area: "6000 sq.ft.",
    image: "image/apartmentm3.jpeg",
    ownerContact: "9876543210"
}
,
    {
    id: 9,
    title: "Modern Apartment in Whitefield",
    location: "Whitefield, Mumbai",
    price: "₹1.8 Cr",
    type: "apartment",
    city: "Mumbai",
    budget: "100+",
    bhk: 3,
    beds: 3,
    baths: 2,
    area: "1800 sq.ft.",
    image: "image/apartmentm4.jpeg",
    ownerContact: "9876543210"
},
    {
        id: 10,
        title: "Modern Apartment in Whitefield",
        location: "Whitefield, Mumbai",
        price: "₹1.1 Cr",
        type: "apartment",
        city: "mumbai",
        budget: "100+",
        bhk: 3,
        beds: 3,
        baths: 2,
        area: "1800 sq.ft.",
        image: "image/apartmentm5.jpeg",
        ownerContact: "9876543210"
    },
    {
        id: 11,
        title: "Luxury Penthouse in Koramangala",
        location: "Koramangala, Bangalore",
        price: "₹4.2 Cr",
        type: "apartment",
        city: "bangalore",
        budget: "100+",
        bhk: 4,
        beds: 4,
        baths: 3,
        area: "3800 sq.ft.",
        image: "image/apartmentb1.webp",
        ownerContact: "9876543210"
    },
    {
        id: 12,
        title: "Garden apartment in Electronic City",
        location: "Electronic City, Bangalore",
        price: "₹2.2 Cr",
        type: "apartment",
        city: "bangalore",
        budget: "100+",
        bhk: 4,
        beds: 4,
        baths: 3,
        area: "3200 sq.ft.",
        image: "image/apartmentb2.jpeg",
        ownerContact: "9876543210"
    },
    {
        id: 13,
        title: "Budget Villa in Sarjapur",
        location: "Sarjapur, Bangalore",
        price: "₹1.5 Cr",
        type: "villa",
        city: "bangalore",
        budget: "100+",
        bhk: 3,
        beds: 3,
        baths: 2,
        area: "2800 sq.ft.",
        image: "image/villab1.jpg", 
        ownerContact: "9876543210"
    },
    {
        id: 14,
        title: "Garden Villa in Electronic City",
        location: "Electronic City, Bangalore",
        price: "₹2.9 Cr",
        type: "villa",
        city: "bangalore",
        budget: "100+",
        bhk: 4,
        beds: 4,
        baths: 3,
        area: "3200 sq.ft.",
        image: "image/villab2.jpg", 
        ownerContact: "9876543210"
    },
    {
        id: 15,
        title: "Budget Villa in Sarjapur",
        location: "Sarjapur, Bangalore",
        price: "₹5.5 Cr",
        type: "villa",
        city: "bangalore",
        budget: "100+",
        bhk: 3,
        beds: 3,
        baths: 2,
        area: "2800 sq.ft.",
        image: "image/villab3.jpg", 
        ownerContact: "9876543210"
    },
     {
        id: 16,
        title: "Luxury Penthouse in Koramangala",
        location: "Koramangala, chennai",
        price: "₹4.2 Cr",
        type: "apartment",
        city: "chennai",
        budget: "100+",
        bhk: 4,
        beds: 4,
        baths: 3,
        area: "3800 sq.ft.",
        image: "image/apartmentc1.jpg", 
        ownerContact: "9876543210"
    },
    {
        id: 17,
        title: "Garden apartment in Electronic City",
        location: "Electronic City, chennai",
        price: "₹2.2 Cr",
        type: "apartment",
        city: "chennai",
        budget: "100+",
        bhk: 4,
        beds: 4,
        baths: 3,
        area: "3200 sq.ft.",
        image: "image/apartmentc2.jpg", 
        ownerContact: "9876543210"
    },
    {
        id: 18,
        title: "Budget Villa in Sarjapur",
        location: "Sarjapur, chennai",
        price: "₹1.5 Cr",
        type: "villa",
        city: "chennai",
        budget: "100+",
        bhk: 3,
        beds: 3,
        baths: 2,
        area: "2800 sq.ft.",
        image: "image/villac3.jpg", 
        ownerContact: "9876543210"
    },
    {
        id: 19,
        title: "Garden Villa in Electronic City",
        location: "Electronic City, chennai",
        price: "₹2.9 Cr",
        type: "villa",
        city: "chennai",
        budget: "100+",
        bhk: 4,
        beds: 4,
        baths: 3,
        area: "3200 sq.ft.",
        image: "image/villac1.jpg", 
        ownerContact: "9876543210"
    },
    {
        id: 20,
        title: "Budget Villa in Sarjapur",
        location: "Sarjapur, chennai",
        price: "₹5.5 Cr",
        type: "villa",
        city: "chennai",
        budget: "100+",
        bhk: 3,
        beds: 3,
        baths: 2,
        area: "2800 sq.ft.",
        image: "image/villac2.jpg", 
        ownerContact: "9876543210"
    },
     {
        id: 21,
        title: "Luxury Penthouse in Koramangala",
        location: "Koramangala, hyderabad",
        price: "₹4.2 Cr",
        type: "apartment",
        city: "hyderabad",
        budget: "100+",
        bhk: 4,
        beds: 4,
        baths: 3,
        area: "3800 sq.ft.",
       image: "image/apartmenth1.jpg", 
       ownerContact: "9876543210"
    },
    {
        id: 22,
        title: "Garden Villa in Electronic City",
        location: "Electronic City, hyderabad",
        price: "₹2.2 Cr",
        type: "apartment",
        city: "hyderabad",
        budget: "100+",
        bhk: 4,
        beds: 4,
        baths: 3,
        area: "3200 sq.ft.",
        image: "image/apartmenth2.jpg", 
        ownerContact: "9876543210"
    },
    {
        id: 23,
        title: "Budget Villa in Sarjapur",
        location: "Sarjapur, hyderabad",
        price: "₹1.5 Cr",
        type: "villa",
        city: "hyderabad",
        budget: "100+",
        bhk: 3,
        beds: 3,
        baths: 2,
        area: "2800 sq.ft.",
        image: "image/villah1.jpg", 
        ownerContact: "9876543210"
    },
    {
        id: 24,
        title: "Garden Villa in Electronic City",
        location: "Electronic City, hyderabad",
        price: "₹2.9 Cr",
        type: "villa",
        city: "hyderabad",
        budget: "100+",
        bhk: 4,
        beds: 4,
        baths: 3,
        area: "3200 sq.ft.",
        image: "image/villah2.jpg", 
        ownerContact: "9876543210"
    },
    {
        id: 25,
        title: "Budget Villa in Sarjapur",
        location: "Sarjapur, hyderabad",
        price: "₹5.5 Cr",
        type: "villa",
        city: "hyderabad",
        budget: "100+",
        bhk: 3,
        beds: 3,
        baths: 2,
        area: "2800 sq.ft.",
        image: "image/villah3.jpg", 
        ownerContact: "9876543210"
    }
    
    
    
];
    

    // Wishlist functionality
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Load all properties initially
    loadProperties(properties);
    updateResultsCount(properties.length);

    // Search form submission
    const searchForm = document.getElementById('property-search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch();
        });
    }

    function performSearch() {
        // Get search values
        const query = document.getElementById('search-query').value.toLowerCase();
        const city = document.getElementById('city-select').value;
        const budget = document.getElementById('budget-select').value;
        const bhk = document.getElementById('bhk-select').value;
        const type = document.getElementById('type-select').value;
        
        // Filter properties
        const filteredProperties = properties.filter(property => {
            // Text search
            const matchesText = query === '' || 
                property.title.toLowerCase().includes(query) || 
                property.location.toLowerCase().includes(query);
            
            // Filter matches
            const matchesCity = city === '' || property.city === city;
            const matchesBudget = budget === '' || property.budget === budget;
            const matchesBHK = bhk === '' || property.bhk.toString() === bhk;
            const matchesType = type === '' || property.type === type;
            
            return matchesText && matchesCity && matchesBudget && matchesBHK && matchesType;
        });
        
        // Display results
        loadProperties(filteredProperties);
        updateResultsCount(filteredProperties.length);
    }

   
    function loadProperties(propertiesToLoad) {
        const grid = document.getElementById('properties-grid');
        
        if (propertiesToLoad.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-home"></i>
                    <h3>No properties found</h3>
                    <p>Try adjusting your search filters</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = '';
        propertiesToLoad.forEach(property => {
            const isInWishlist = wishlist.includes(property.id);
            const card = `
                <div class="property-card" data-type="${property.type}">
                    <div class="property-img">
                        <img src="${property.image}" alt="${property.title}">
                        <span class="property-badge">${property.type}</span>
                        <div class="property-actions">
                            <div class="action-btn wishlist ${isInWishlist ? 'active' : ''}" data-id="${property.id}">
                                <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                            </div>
                            <div class="action-btn share" data-id="${property.id}">
                                <i class="fas fa-share-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div class="property-info">
                        <h3>${property.title}</h3>
                        <div class="property-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${property.location}
                        </div>
                        <div class="property-price">${property.price}</div>
                        <!-- Added Owner Contact Section -->
                        <div class="property-contact">
                            <i class="fas fa-phone"></i>
                            <a href="tel:${property.ownerContact.replace(/\D/g, '')}">${property.ownerContact}</a>
                        </div>
                        <div class="property-features">
                            <div class="feature">
                                <i class="fas fa-bed"></i>
                                <span>${property.beds} Beds</span>
                            </div>
                            <div class="feature">
                                <i class="fas fa-bath"></i>
                                <span>${property.baths} Baths</span>
                            </div>
                            <div class="feature">
                                <i class="fas fa-vector-square"></i>
                                <span>${property.area}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            grid.innerHTML += card;
        });

        initPropertyActions();
    }
    function initPropertyActions() {
        // Wishlist buttons
        document.querySelectorAll('.action-btn.wishlist').forEach(btn => {
            btn.addEventListener('click', function() {
                const propertyId = parseInt(this.getAttribute('data-id'));
                
                if (wishlist.includes(propertyId)) {
                    // Remove from wishlist
                    wishlist = wishlist.filter(id => id !== propertyId);
                    this.classList.remove('active');
                    this.innerHTML = '<i class="far fa-heart"></i>';
                } else {
                    // Add to wishlist
                    wishlist.push(propertyId);
                    this.classList.add('active');
                    this.innerHTML = '<i class="fas fa-heart"></i>';
                }
                
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
            });
        });

        // Share buttons
        document.querySelectorAll('.action-btn.share').forEach(btn => {
            btn.addEventListener('click', function() {
                const propertyId = parseInt(this.getAttribute('data-id'));
                const property = properties.find(p => p.id === propertyId);
                
                if (navigator.share) {
                    navigator.share({
                        title: property.title,
                        text: `Check out this ${property.type} in ${property.location} for ${property.price}`,
                        url: window.location.href
                    }).catch(err => {
                        console.log('Error sharing:', err);
                        copyToClipboard(`${property.title} - ${property.location} - ${property.price}`);
                    });
                } else {
                    copyToClipboard(`${property.title} - ${property.location} - ${property.price}`);
                }
            });
        });
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Property details copied to clipboard!');
    }

    function updateResultsCount(count) {
        const resultsText = count === 1 ? "1 property found" : `${count} properties found`;
        document.getElementById('results-count').textContent = resultsText;
    }

    // Shortlist modal functionality
    const shortlistLink = document.getElementById('shortlist-link');
    const shortlistModal = document.getElementById('shortlist-modal');
    const closeShortlist = document.getElementById('close-shortlist');

    if (shortlistLink && shortlistModal && closeShortlist) {
        shortlistLink.addEventListener('click', function(e) {
            e.preventDefault();
            showShortlist();
        });

        closeShortlist.addEventListener('click', function() {
            shortlistModal.style.display = 'none';
        });

        function showShortlist() {
            const shortlistItems = document.getElementById('shortlist-items');
            shortlistItems.innerHTML = '';
            
            if (wishlist.length === 0) {
                shortlistItems.innerHTML = '<p>Your shortlist is empty</p>';
            } else {
                wishlist.forEach(propertyId => {
                    const property = properties.find(p => p.id === propertyId);
                    if (property) {
                        const item = document.createElement('div');
                        item.className = 'shortlist-item';
                        
                        item.innerHTML = `
                            <img src="${property.image}" alt="${property.title}">
                            <div>
                                <h3>${property.title}</h3>
                                <p>${property.location}</p>
                                <p style="font-weight: bold; color: var(--primary-color);">${property.price}</p>
                                <button class="remove-btn remove-from-shortlist" data-id="${property.id}">Remove</button>
                            </div>
                        `;
                        
                        shortlistItems.appendChild(item);
                    }
                });
            }
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-from-shortlist').forEach(btn => {
                btn.addEventListener('click', function() {
                    const propertyId = parseInt(this.getAttribute('data-id'));
                    wishlist = wishlist.filter(id => id !== propertyId);
                    localStorage.setItem('wishlist', JSON.stringify(wishlist));
                    showShortlist();
                    
                    // Update heart icon in main grid
                    const heartIcon = document.querySelector(`.action-btn.wishlist[data-id="${propertyId}"]`);
                    if (heartIcon) {
                        heartIcon.classList.remove('active');
                        heartIcon.innerHTML = '<i class="far fa-heart"></i>';
                    }
                });
            });
            
            shortlistModal.style.display = 'flex';
        }
    }
});