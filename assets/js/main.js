/**

 * PUSAKA BUSANA — Main JavaScript
 * Features: Search, Filter, Lazy Loading (Infinite Scroll), Card Rendering
 */

(function() {
  'use strict';

  // ====================
  // CONFIGURATION
  // ====================
  const CONFIG = {
    itemsPerLoad: 20,
    searchDebounce: 300,
    scrollThreshold: 200
  };

  // ====================
  // STATE
  // ====================
  const state = {
    allData: [],
    filteredData: [],
    currentIndex: 0,
    isLoading: false,
    searchTerm: '',
    selectedIsland: '',
    selectedOccasion: ''
  };

  // ====================
  // DOM ELEMENTS
  // ====================
  const elements = {
    contentGrid: document.getElementById('contentGrid'),
    searchInput: document.getElementById('searchInput'),
    islandFilter: document.getElementById('islandFilter'),
    occasionFilter: document.getElementById('occasionFilter'),
    visibleCount: document.getElementById('visibleCount'),
    totalCount: document.getElementById('totalCount'),
    loadingIndicator: document.getElementById('loadingIndicator'),
    endMessage: document.getElementById('endMessage'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalContent: document.getElementById('modalContent'),
    modalClose: document.getElementById('modalClose')
  };

  // ====================
  // UTILITY FUNCTIONS
  // ====================

  /**
   * Debounce function for search input
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Truncate text to specified length
   */
  function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  /**
   * Highlight search matches in text
   */
  function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  /**
   * Generate tags HTML for card
   */
  function generateTags(item) {
    const tags = [];
    tags.push(item.island);
    if (item.occasions && item.occasions.length > 0) {
      tags.push(item.occasions[0]);
    }
    if (item.gender && item.gender !== 'unisex') {
      tags.push(item.gender === 'pria' ? 'Pria' : 'Wanita');
    }
    return tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');
  }

  /**
   * Generate source HTML for card
   */
  function generateSource(sources) {
    if (!sources || sources.length === 0) return '';
    const source = sources[0];
    return `Sumber: <a href="${source.url}" target="_blank" rel="noopener">${source.name}</a> 🔗`;
  }

  /**
   * Generate readable, descriptive alt text from image filename
   */
  function generateAltFromFilename(item) {
    let baseName = item.imageUrl;
    if (baseName.startsWith('assets/images/')) {
      baseName = baseName.replace('assets/images/', '');
    }
    baseName = baseName.replace(/\.jpeg$/i, '');
    baseName = baseName.replace(/[(]/g, ' ').replace(/[)]/g, '').replace(/\s+/g, ' ').trim();
    const parts = baseName.split(' ');
    const cleanedParts = parts.filter(part =>
      part &&
      !part.startsWith('[') &&
      part !== 'Baca' &&
      part !== 'kiri' &&
      part !== 'kanan' &&
      part !== 'download' &&
      part !== 'setup' &&
      part !== 'README'
    );
    const cleanName = cleanedParts.join(' ');
    if (!cleanName) return `${item.name} ${item.province}`;
    return `${cleanName}, ${item.name} dari ${item.province}`;
  }

  /**
   * Generate inline SVG placeholder for fallback
   */
  function generatePlaceholderSVG(name, province) {
    const initials = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    const bgColor = 'f5f0eb';
    const textColor = 'C41E3A';
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"><rect fill="#${bgColor}" width="400" height="225"/><rect fill="#${bgColor}" x="2" y="2" width="396" height="221" rx="4"/><text x="200" y="95" text-anchor="middle" font-family="Merriweather,Georgia,serif" font-size="48" font-weight="700" fill="#${textColor}">${initials}</text><text x="200" y="130" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="14" fill="#666666">${name}</text><text x="200" y="150" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="11" fill="#999999">${province}</text><text x="200" y="195" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="9" fill="#bbbbbb">PUSAKA BUSANA</text></svg>`)}`;
  }

  // ====================
  // RENDER FUNCTIONS
  // ====================

  /**
   * Create HTML for a single card
   */
  function createCard(item) {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('data-id', item.id);

    const highlightedName = highlightText(item.name, state.searchTerm);
    const highlightedProvince = highlightText(item.province, state.searchTerm);
    const highlightedDescription = highlightText(truncate(item.description, 120), state.searchTerm);

    // Use real image URL from data, fallback to placeholder if not available
    const imageUrl = item.imageUrl || generatePlaceholderSVG(item.name, item.province);
    let altText;
    if (imageUrl.startsWith('assets/images/')) {
      altText = generateAltFromFilename(item);
    } else {
      altText = `${item.name}, ${item.name} dari ${item.province}`;
    }

    card.innerHTML = `
      <img
        src="${imageUrl}"
        alt="${altText}"
        class="card-image"
        loading="lazy"
        onerror="this.onerror=null;this.src='${generatePlaceholderSVG(item.name, item.province)}'"
      >
      <h3 class="card-title">${highlightedName}</h3>
      <p class="card-province">${highlightedProvince}</p>
      <p class="card-description">${highlightedDescription}</p>
      <hr class="card-divider">
      <p class="card-source">${generateSource(item.sources)}</p>
      <div class="card-tags">
        ${generateTags(item)}
      </div>
    `;

    // Make card clickable
    card.addEventListener('click', () => openModal(item));
    card.style.cursor = 'pointer';

    return card;
  }

  /**
   * Render batch of cards
   */
  function renderCards() {
    if (state.isLoading) return;
    state.isLoading = true;

    elements.loadingIndicator.classList.add('visible');

    // Simulate small delay for UX
    setTimeout(() => {
      const endIndex = Math.min(state.currentIndex + CONFIG.itemsPerLoad, state.filteredData.length);
      const fragment = document.createDocumentFragment();

      for (let i = state.currentIndex; i < endIndex; i++) {
        const card = createCard(state.filteredData[i]);
        fragment.appendChild(card);
      }

      elements.contentGrid.appendChild(fragment);
      state.currentIndex = endIndex;

      // Update counts
      elements.visibleCount.textContent = state.currentIndex;
      elements.totalCount.textContent = state.filteredData.length;

      // Check if all items loaded
      if (state.currentIndex >= state.filteredData.length) {
        elements.endMessage.classList.add('visible');
        elements.loadingIndicator.classList.remove('visible');
      } else {
        elements.loadingIndicator.classList.remove('visible');
      }

      state.isLoading = false;
    }, 100);
  }

  // ====================
  // FILTER & SEARCH
  // ====================

  /**
   * Apply filters and search
   */
  function applyFilters() {
    let filtered = [...state.allData];

    // Apply island filter
    if (state.selectedIsland) {
      filtered = filtered.filter(item => item.island === state.selectedIsland);
    }

    // Apply occasion filter
    if (state.selectedOccasion) {
      filtered = filtered.filter(item =>
        item.occasions && item.occasions.includes(state.selectedOccasion)
      );
    }

    // Apply search
    if (state.searchTerm) {
      const term = state.searchTerm.toLowerCase();
      filtered = filtered.filter(item => {
        return (
          item.name.toLowerCase().includes(term) ||
          item.province.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          (item.keywords && item.keywords.some(k => k.toLowerCase().includes(term))) ||
          (item.ethnic && item.ethnic.toLowerCase().includes(term))
        );
      });
    }

    state.filteredData = filtered;
    state.currentIndex = 0;

    // Clear and re-render
    elements.contentGrid.innerHTML = '';
    elements.endMessage.classList.remove('visible');
    elements.loadingIndicator.classList.remove('visible');

    renderCards();
  }

  /**
   * Handle search input
   */
  const handleSearch = debounce(function(e) {
    state.searchTerm = e.target.value.trim();
    applyFilters();
  }, CONFIG.searchDebounce);

  /**
   * Handle island filter change
   */
  function handleIslandFilter(e) {
    state.selectedIsland = e.target.value;
    applyFilters();
  }

  /**
   * Handle occasion filter change
   */
  function handleOccasionFilter(e) {
    state.selectedOccasion = e.target.value;
    applyFilters();
  }

  // ====================
  // MODAL FUNCTIONS
  // ====================

  /**
   * Open modal with item details
   */
  function openModal(item) {
    const modal = elements.modalOverlay;
    const content = elements.modalContent;

    // Generate long detailed description
    const longDescription = generateLongDescription(item);

    // Generate symbolism explanation
    const symbolismHTML = generateSymbolismHTML(item.symbolism);

    // Generate occasions info
    const occasionsHTML = generateOccasionsHTML(item.occasions);

    // Determine image URL for modal
    const imageUrl = item.imageUrl || generatePlaceholderSVG(item.name, item.province);
    let altText;
    if (imageUrl.startsWith('assets/images/')) {
      altText = generateAltFromFilename(item);
    } else {
      altText = `${item.name}, ${item.name} dari ${item.province}`;
    }

    content.innerHTML = `
      <img
        src="${imageUrl}"
        alt="${altText}"
        class="modal-image"
        onerror="this.onerror=null;this.src='${generatePlaceholderSVG(item.name, item.province)}'"
      >
      <div class="modal-header">
        <h2 class="modal-title" id="modalTitle">${item.name}</h2>
        <p class="modal-subtitle">${item.province} • ${item.ethnic}</p>
      </div>
      <div class="modal-body">
        <!-- DESKRIPSI LENGKAP -->
        <div class="modal-section">
          <h3 class="modal-section-title">Deskripsi Lengkap</h3>
          <p class="modal-description">${longDescription}</p>
        </div>

        <!-- KUTIPAN FILOSOFIS -->
        ${item.description.includes('filosofis') || item.description.includes('makna') ? `
        <div class="modal-quote">
          "${generateQuote(item)}"
        </div>
        ` : ''}

        <!-- INFORMASI DETAIL -->
        <div class="modal-section">
          <h3 class="modal-section-title">Informasi Detail</h3>
          <div class="modal-info-grid">
            <div class="modal-info-item">
              <p class="modal-info-label">Suku / Etnis</p>
              <p class="modal-info-value">${item.ethnic}</p>
            </div>
            <div class="modal-info-item">
              <p class="modal-info-label">Provinsi</p>
              <p class="modal-info-value">${item.province}</p>
            </div>
            <div class="modal-info-item">
              <p class="modal-info-label">Pulau</p>
              <p class="modal-info-value">${item.island}</p>
            </div>
            <div class="modal-info-item">
              <p class="modal-info-label">Gender</p>
              <p class="modal-info-value">${item.gender === 'pria' ? 'Pria' : item.gender === 'wanita' ? 'Wanita' : 'Unisex (Pria & Wanita)'}</p>
            </div>
          </div>
        </div>

        <!-- FILOSOFI WARNA -->
        ${symbolismHTML ? `
        <div class="modal-section">
          <h3 class="modal-section-title">Filosofi Warna & Simbol</h3>
          <p class="modal-description" style="margin-bottom: var(--spacing-md);">
            Setiap warna dan simbol dalam ${item.name} memiliki makna mendalam yang mencerminkan nilai-nilai kehidupan masyarakat ${item.ethnic}:
          </p>
          ${symbolismHTML}
        </div>
        ` : ''}

        <!-- ACARA & PENGGUNAAN -->
        <div class="modal-section">
          <h3 class="modal-section-title">Acara & Penggunaan</h3>
          ${occasionsHTML}
        </div>

        <!-- TAGS -->
        <div class="modal-section">
          <h3 class="modal-section-title">Kategori</h3>
          <div class="modal-tags">
            <span class="modal-tag accent">${item.island}</span>
            ${item.occasions.map(o => `<span class="modal-tag">${capitalize(o)}</span>`).join('')}
            ${item.ethnic ? `<span class="modal-tag">${item.ethnic}</span>` : ''}
            ${item.gender !== 'unisex' ? `<span class="modal-tag">${item.gender === 'pria' ? 'Pria' : 'Wanita'}</span>` : ''}
          </div>
        </div>

        <!-- SUMBER -->
        <div class="modal-section">
          <h3 class="modal-section-title">Sumber & Referensi</h3>
          <div class="modal-sources">
            ${item.sources.map(s => `
              <p class="modal-source-item">
                <a href="${s.url}" target="_blank" rel="noopener">🔗 ${s.name}</a>
                ${s.verified ? '<span class="modal-verified"> ✓ Terverifikasi</span>' : ''}
              </p>
            `).join('')}
          </div>
          ${item.imageCredit ? `<p class="modal-source-item" style="margin-top: var(--spacing-sm); font-size: 13px; color: var(--color-text-secondary);">${item.imageCredit}</p>` : ''}
        </div>
      </div>
    `;

    // Show modal
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Focus trap
    setTimeout(() => {
      elements.modalClose.focus();
    }, 100);
  }

  /**
   * Close modal
   */
  function closeModal() {
    const modal = elements.modalOverlay;
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  /**
   * Check if user scrolled near bottom
   */
  function handleScroll() {
    if (state.isLoading) return;
    if (state.currentIndex >= state.filteredData.length) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - CONFIG.scrollThreshold;

    if (scrollPosition >= threshold) {
      renderCards();
    }
  }

  // ====================
  // INITIALIZATION
  // ====================

  /**
   * Initialize the application
   */
  function init() {
    // Load data
    if (typeof clothingData !== 'undefined') {
      state.allData = clothingData;
      state.filteredData = [...clothingData];
    } else {
      console.error('Clothing data not loaded');
      return;
    }

    // Attach event listeners
    elements.searchInput.addEventListener('input', handleSearch);
    elements.islandFilter.addEventListener('change', handleIslandFilter);
    elements.occasionFilter.addEventListener('change', handleOccasionFilter);
    window.addEventListener('scroll', handleScroll);

    // Modal event listeners
    elements.modalClose.addEventListener('click', closeModal);
    elements.modalOverlay.addEventListener('click', (e) => {
      if (e.target === elements.modalOverlay) {
        closeModal();
      }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.modalOverlay.classList.contains('visible')) {
        closeModal();
      }
    });

    // Initial render
    renderCards();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();