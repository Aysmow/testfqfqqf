

$(function () {
  window.vehicleColors = {
    // Couleurs standards/classiques (type 0)
    standard: [
        { id: 0, name: "Noir", color: "#0d1116" },
        { id: 1, name: "Graphite", color: "#1c1d21" },
        { id: 2, name: "Noir Acier", color: "#32383d" },
        { id: 3, name: "Gris Foncé", color: "#454b4f" },
        { id: 4, name: "Gris Argenté", color: "#999da0" },
        { id: 5, name: "Gris Acier", color: "#c2c4c6" },
        { id: 6, name: "Argenté", color: "#979a97" },
        { id: 7, name: "Bleu Argenté", color: "#637380" },
        { id: 8, name: "Gris Roulé", color: "#63625c" },
        { id: 9, name: "Argenté Ombré", color: "#3c3f47" },
        { id: 10, name: "Pierre", color: "#444e54" },
        { id: 11, name: "Noir Minuit", color: "#1f2226" },
        { id: 12, name: "Gris Anthracite", color: "#13181f" },
        { id: 13, name: "Noir Réplica", color: "#26282a" },
        { id: 14, name: "Carbone", color: "#1e2429" },
        { id: 15, name: "Bleu Graphite", color: "#31383f" },
        { id: 16, name: "Rouge Foncé", color: "#7a0101" },
        { id: 17, name: "Rouge Cabernet", color: "#620022" },
        { id: 18, name: "Rouge Vin", color: "#320000" },
        { id: 19, name: "Rose Pastel", color: "#ba676f" },
        { id: 20, name: "Rouge Saumon", color: "#ed7176" },
        { id: 21, name: "Rouge Vermillon", color: "#cf1f21" },
        { id: 22, name: "Orange", color: "#f44d00" },
        { id: 23, name: "Rouge Clair", color: "#B22222" },
        { id: 24, name: "Jaune Crème", color: "#fde7a9" },
        { id: 25, name: "Jaune Citron", color: "#ffc91f" },
        { id: 26, name: "Jaune", color: "#fcf64a" },
        { id: 27, name: "Lime", color: "#84c365" },
        { id: 28, name: "Vert Feuille", color: "#4e6443" },
        { id: 29, name: "Racing Green", color: "#132428" },
        { id: 30, name: "Olive", color: "#6d6c3c" },
        { id: 31, name: "Vert Forêt", color: "#222e46" },
        { id: 32, name: "Vert Prairie", color: "#6f8c51" },
        { id: 33, name: "Vert Racing", color: "#66b81f" },
        { id: 34, name: "Vert Marin", color: "#22383e" },
        { id: 35, name: "Sarcelle Foncé", color: "#1f5a3a" },
        { id: 36, name: "Turquoise", color: "#509079" },
        { id: 37, name: "Bleu Mer", color: "#1d5a76" },
        { id: 38, name: "Bleu Marine", color: "#112552" },
        { id: 39, name: "Bleu Horizon", color: "#1a1d24" },
        { id: 40, name: "Ultra Bleu", color: "#253351" },
        { id: 41, name: "Bleu Saxo", color: "#1c3551" },
        { id: 42, name: "Bleu Galaxie", color: "#151921" },
        { id: 43, name: "Bleu Diamant", color: "#193e6f" },
        { id: 44, name: "Surf Bleu", color: "#5c889e" },
        { id: 45, name: "Bleu Nautique", color: "#525661" },
        { id: 46, name: "Bleu Délavé", color: "#8ea8b0" },
        { id: 47, name: "Bleue Schafter", color: "#202c3b" },
        { id: 48, name: "Mauve Spinnaker", color: "#635f60" },
        { id: 49, name: "Violet Pourpre", color: "#260C3A" },
        { id: 50, name: "Violet Minuit", color: "#2c0a57" },
        { id: 51, name: "Violet Schafter", color: "#161629" },
        { id: 52, name: "Violet Clair", color: "#483B63" },
        { id: 53, name: "Blanc Crème", color: "#E5E5E5" },
        { id: 54, name: "Crème Glacée", color: "#FBFCF4" },
        { id: 55, name: "Blanc Neige", color: "#FFFFFF" },
        { id: 56, name: "Blanc Frost", color: "#F2F2F2" },
        { id: 57, name: "Beige Hêtre", color: "#c1ab6c" },
        { id: 58, name: "Brun Van", color: "#5b391b" },
        { id: 59, name: "Beige Platane", color: "#6b6b6b" },
        { id: 60, name: "Brun Terre", color: "#3b2e2a" },
        { id: 61, name: "Brun Désert", color: "#7b6c5a" },
        { id: 62, name: "Brun Noisette", color: "#5a4d41" },
        { id: 63, name: "Beige Pierre", color: "#d0c0b1" }
    ],
    // Couleurs métalliques (type 1)
    metallic: [
        { id: 64, name: "Métal Noir", color: "#0d1116" },
        { id: 65, name: "Métal Graphite", color: "#1c1d21" },
        { id: 66, name: "Métal Noir Acier", color: "#32383d" },
        { id: 67, name: "Métal Gris Foncé", color: "#454b4f" },
        { id: 68, name: "Métal Gris Argenté", color: "#999da0" },
        { id: 69, name: "Métal Gris Acier", color: "#c2c4c6" },
        { id: 70, name: "Métal Argenté", color: "#979a97" },
        { id: 71, name: "Métal Bleu Argenté", color: "#637380" },
        { id: 72, name: "Métal Gris Roulé", color: "#63625c" },
        { id: 73, name: "Métal Argenté Ombré", color: "#3c3f47" },
        { id: 74, name: "Métal Pierre", color: "#444e54" },
        { id: 75, name: "Métal Noir Minuit", color: "#1f2226" },
        { id: 76, name: "Métal Gris Anthracite", color: "#13181f" },
        { id: 77, name: "Métal Noir Réplica", color: "#26282a" },
        { id: 78, name: "Métal Carbone", color: "#1e2429" },
        { id: 79, name: "Métal Bleu Graphite", color: "#31383f" },
        { id: 80, name: "Métal Rouge Foncé", color: "#7a0101" },
        { id: 81, name: "Métal Rouge Cabernet", color: "#620022" },
        { id: 82, name: "Métal Rouge Vin", color: "#320000" },
        { id: 83, name: "Métal Rose Pastel", color: "#ba676f" },
        { id: 84, name: "Métal Rouge Saumon", color: "#ed7176" },
        { id: 85, name: "Métal Rouge Vermillon", color: "#cf1f21" },
        { id: 86, name: "Métal Orange", color: "#f44d00" },
        { id: 87, name: "Métal Rouge Clair", color: "#B22222" },
        { id: 88, name: "Métal Jaune Crème", color: "#fde7a9" },
        { id: 89, name: "Métal Jaune Citron", color: "#ffc91f" },
        { id: 90, name: "Métal Jaune", color: "#fcf64a" },
        { id: 91, name: "Métal Lime", color: "#84c365" },
        { id: 92, name: "Métal Vert Feuille", color: "#4e6443" },
        { id: 93, name: "Métal Racing Green", color: "#132428" },
        { id: 94, name: "Métal Olive", color: "#6d6c3c" },
        { id: 95, name: "Métal Vert Forêt", color: "#222e46" },
        { id: 96, name: "Métal Vert Prairie", color: "#6f8c51" },
        { id: 97, name: "Métal Vert Racing", color: "#66b81f" },
        { id: 98, name: "Métal Vert Marin", color: "#22383e" },
        { id: 99, name: "Métal Sarcelle Foncé", color: "#1f5a3a" },
        { id: 100, name: "Métal Turquoise", color: "#509079" },
        { id: 101, name: "Métal Bleu Mer", color: "#1d5a76" },
        { id: 102, name: "Métal Bleu Marine", color: "#112552" },
        { id: 103, name: "Métal Bleu Horizon", color: "#1a1d24" },
        { id: 104, name: "Métal Ultra Bleu", color: "#253351" },
        { id: 105, name: "Métal Bleu Saxo", color: "#1c3551" },
        { id: 106, name: "Métal Bleu Galaxie", color: "#151921" },
        { id: 107, name: "Métal Bleu Diamant", color: "#193e6f" },
        { id: 108, name: "Métal Surf Bleu", color: "#5c889e" },
        { id: 109, name: "Métal Bleu Nautique", color: "#525661" },
        { id: 110, name: "Métal Bleu Délavé", color: "#8ea8b0" },
        { id: 111, name: "Métal Bleue Schafter", color: "#202c3b" },
        { id: 112, name: "Métal Mauve Spinnaker", color: "#635f60" },
        { id: 113, name: "Métal Violet Pourpre", color: "#260C3A" },
        { id: 114, name: "Métal Violet Minuit", color: "#2c0a57" },
        { id: 115, name: "Métal Violet Schafter", color: "#161629" },
        { id: 116, name: "Métal Violet Clair", color: "#483B63" },
        { id: 117, name: "Métal Blanc Crème", color: "#E5E5E5" },
        { id: 118, name: "Métal Crème Glacée", color: "#FBFCF4" },
        { id: 119, name: "Métal Blanc Neige", color: "#FFFFFF" },
        { id: 120, name: "Métal Blanc Frost", color: "#F2F2F2" },
        { id: 121, name: "Métal Beige Hêtre", color: "#c1ab6c" },
        { id: 122, name: "Métal Brun Van", color: "#5b391b" },
        { id: 123, name: "Métal Beige Platane", color: "#6b6b6b" },
        { id: 124, name: "Métal Brun Terre", color: "#3b2e2a" },
        { id: 125, name: "Métal Brun Désert", color: "#7b6c5a" },
        { id: 126, name: "Métal Brun Noisette", color: "#5a4d41" },
        { id: 127, name: "Métal Beige Pierre", color: "#d0c0b1" }
    ],
    // Couleurs mate (type 3)
    matte: [
        { id: 128, name: "Mat Noir", color: "#0d1116" },
        { id: 129, name: "Mat Gris", color: "#32383d" },
        { id: 130, name: "Mat Gris Clair", color: "#999da0" },
        { id: 131, name: "Mat Blanc Glacé", color: "#FFFFFF" },
        { id: 132, name: "Mat Bleu", color: "#1d5a76" },
        { id: 133, name: "Mat Bleu Foncé", color: "#112552" },
        { id: 134, name: "Mat Violet Minuit", color: "#2c0a57" },
        { id: 135, name: "Mat Violet", color: "#483B63" },
        { id: 136, name: "Mat Rouge", color: "#cf1f21" },
        { id: 137, name: "Mat Rouge Foncé", color: "#7a0101" },
        { id: 138, name: "Mat Orange", color: "#f44d00" },
        { id: 139, name: "Mat Jaune", color: "#fcf64a" },
        { id: 140, name: "Mat Lime", color: "#84c365" },
        { id: 141, name: "Mat Vert", color: "#4e6443" },
        { id: 142, name: "Mat Vert Forêt", color: "#222e46" },
        { id: 143, name: "Mat Beige", color: "#c1ab6c" },
        { id: 144, name: "Mat Brun Clair", color: "#7b6c5a" },
        { id: 145, name: "Mat Brun Foncé", color: "#3b2e2a" },
        { id: 146, name: "Mat Olive", color: "#6d6c3c" },
        { id: 147, name: "Mat Tan", color: "#d0c0b1" },
        { id: 148, name: "Mat Vert Armée", color: "#4d5d44" }
    ],
    // Couleurs métal (type 2)
    metal: [
        { id: 149, name: "Brossé Acier", color: "#999da0" },
        { id: 150, name: "Brossé Noir Acier", color: "#1c1d21" },
        { id: 151, name: "Brossé Aluminium", color: "#c2c4c6" },
        { id: 152, name: "Chrome", color: "#e6e6e6" },
        { id: 153, name: "Or", color: "#d4af37" },
        { id: 154, name: "Bronze", color: "#cd7f32" },
        { id: 155, name: "Or Rosé", color: "#e5c1a7" },
        { id: 156, name: "Pur Gold", color: "#af9f6f" },
        { id: 157, name: "Brossé Or", color: "#d4af37" },
        { id: 158, name: "Argent Liquide", color: "#e6e6e6" }
    ],
    // Couleurs chameleon (type 4)
    chameleon: [
        { id: 159, name: "Chromatique", color: "#e6e6e6" }
    ]
};

    // Données des catégories reçues du serveur
    let performanceCategories = {};
    let exteriorCategories = {};
    let interiorCategories = {};
    let colorCategories = {};
    let wheelCategories = {};
    let windowTints = [];
    let vehicleColors = [];
    let wheelSmokeColors = [];
  
    // Données du véhicule actuel
    let vehicleData = {};
  
    // Variable pour la couleur de fumée actuelle des roues
    let currentSmokeColor = 1;
  
    // Total des modifications
    let totalPrice = 0;
    let currentCategory = "performance";
  
    // Fonction pour générer dynamiquement les éléments de l'interface pour les performances
    function generatePerformanceUI() {
      $("#performance-container").empty();
  
      // Ajouter un titre
      $("#performance-container").append(
        `<div class="section-title">Customisation performances</div>`
      );
  
      // Créer les éléments pour chaque catégorie de performance
      const categories = [
        "engine",
        "brakes",
        "transmission",
        "suspension",
        "armor",
        "turbo",
      ];
  
      categories.forEach((category) => {
        const data = performanceCategories[category];
        if (!data) return;
  
        if (category === "turbo") {
          // Cas spécial pour le turbo (toggle)
          const turboToggle = `
                      <div class="turbo">
                          <div class="text-wrapper">${data.name}</div>
                          <div class="turbo-btn" id="turbo-toggle" style="background-color: ${
                            data.current ? "#398d75" : "#12121281"
                          }"></div>
                      </div>
                  `;
          $("#performance-container").append(turboToggle);
  
          // Gestionnaire d'événement
          $("#turbo-toggle").click(() => {
            const newLevel = data.current === 0 ? 1 : 0;
            data.current = newLevel;
            applyModification("turbo", newLevel);
  
            // Mettre à jour l'interface
            $("#turbo-toggle").css(
              "background-color",
              newLevel === 1 ? "#398d75" : "#12121281"
            );
          });
        } else {
          // Pour les autres catégories (sliders)
          const modItem = `
                      <div class="mod-item" data-category="${category}">
                          <div class="mod-item-title">${data.name}</div>
                          <div class="mod-item-level" id="${category}-level">${
            data.current === 0 ? "Aucun" : "Niveau " + data.current
          }</div>
                          <div class="selection">
                              <div class="ligne"></div>
                              <div class="rond" id="${category}-slider"></div>
                              <div class="fleches" id="${category}-right">
                                  <div class="fleche"></div>
                                  <div class="fleche-2"></div>
                              </div>
                              <div class="fleches-2" id="${category}-left">
                                  <div class="fleche"></div>
                                  <div class="fleche-2"></div>
                              </div>
                          </div>
                      </div>
                  `;
  
          $("#performance-container").append(modItem);
  
          // Initialiser le slider
          const lineWidth = 260;
          const position = (data.current / data.maxLevel) * lineWidth;
          $(`#${category}-slider`).css("left", 45 + position);
  
          // Gestionnaires d'événements
          $(`#${category}-left`).click(() => changeModLevel(category, -1));
          $(`#${category}-right`).click(() => changeModLevel(category, 1));
        }
      });
  
      // Initialiser les sliders glissables
      makeSlidersDraggable();
    }
  
    function generateInteriorUI() {
      $('#interior-container').empty();
      
      // Ajouter un titre
      $('#interior-container').append(`<div class="section-title">Customisation intérieur</div>`);
      
      // Variable pour vérifier si des options sont disponibles
      let hasOptions = false;
      
      // Générer les éléments pour chaque catégorie intérieure
      for (const category in interiorCategories) {
          const data = interiorCategories[category];
          
          // Une catégorie est valide si maxLevel > 0
          // Ne pas afficher les options non disponibles
          if (data && data.maxLevel > 0) {
              hasOptions = true;
              
              const modItem = `
                  <div class="mod-item" data-category="${category}">
                      <div class="mod-item-title">${data.name}</div>
                      <div class="mod-item-level" id="${category}-level">${data.current > 0 ? "Niveau " + data.current : "Aucun"}</div>
                      <div class="selection">
                          <div class="ligne"></div>
                          <div class="rond" id="${category}-slider"></div>
                          <div class="fleches" id="${category}-right">
                              <div class="fleche"></div>
                              <div class="fleche-2"></div>
                          </div>
                          <div class="fleches-2" id="${category}-left">
                              <div class="fleche"></div>
                              <div class="fleche-2"></div>
                          </div>
                      </div>
                  </div>
              `;
              
              $('#interior-container').append(modItem);
              
              // Initialiser le slider - Calcul amélioré de la position
              const lineWidth = 260;
              const maxLevel = data.maxLevel || 1; // Éviter la division par zéro
              const position = maxLevel > 0 ? ((data.current || 0) / maxLevel) * lineWidth : 0;
              
              $(`#${category}-slider`).css('left', 45 + position);
              
              // Gestionnaires d'événements améliorés
              $(`#${category}-left`).click(() => {
                  if (data.current > 0) {
                      changeModLevel(category, -1);
                  }
              });
              
              $(`#${category}-right`).click(() => {
                  if (data.current < data.maxLevel) {
                      changeModLevel(category, 1);
                  }
              });
          }
      }
      
      // Afficher un message si aucune option n'est disponible
      if (!hasOptions) {
          $('#interior-container').append(`
              <div class="mod-item-title2" style="margin: 20px 0; text-align: center;">
                  Aucune option d'intérieur disponible pour ce véhicule
              </div>
          `);
      }
      
      // Initialiser les sliders glissables améliorés
      makeSlidersDraggable();
    }
  
  
    // Fonction pour générer dynamiquement les éléments de l'interface pour l'extérieur
  function generateExteriorUI() {
    $('#exterior-container').empty();
    
    // Ajouter un titre
    $('#exterior-container').append(`<div class="section-title">Customisation extérieur</div>`);
    
    // Variable pour vérifier si des options sont disponibles
    let hasExteriorOptions = false;
    
    // Générer les éléments pour chaque catégorie extérieure
    for (const category in exteriorCategories) {
        const data = exteriorCategories[category];
        
        // Ne pas afficher les options qui ne sont pas disponibles
        if (data && data.maxLevel > 0) {
            hasExteriorOptions = true;
            
            const modItem = `
                <div class="mod-item" data-category="${category}">
                    <div class="mod-item-title">${data.name}</div>
                    <div class="mod-item-level" id="${category}-level">${data.current > 0 ? "Niveau " + data.current : "Aucun"}</div>
                    <div class="selection">
                        <div class="ligne"></div>
                        <div class="rond" id="${category}-slider"></div>
                        <div class="fleches" id="${category}-right">
                            <div class="fleche"></div>
                            <div class="fleche-2"></div>
                        </div>
                        <div class="fleches-2" id="${category}-left">
                            <div class="fleche"></div>
                            <div class="fleche-2"></div>
                        </div>
                    </div>
                </div>
            `;
            
            $('#exterior-container').append(modItem);
            
            // Initialiser le slider
            const lineWidth = 260;
            const position = (data.current / data.maxLevel) * lineWidth;
            $(`#${category}-slider`).css('left', 45 + position);
            
            // Gestionnaires d'événements
            $(`#${category}-left`).click(() => changeModLevel(category, -1));
            $(`#${category}-right`).click(() => changeModLevel(category, 1));
        }
    }
    
    // Ajouter les options de livery
    // Vérifions si le véhicule a des livrées disponibles
    let liveryCount = 0;
    if (vehicleData.livery !== undefined) {
        // Si on a déjà l'information sur les livrées disponibles
        liveryCount = vehicleData.livery + 5; // Estimation du nombre total de livrées
    } else if (typeof GetVehicleLiveryCount === 'function') {
        // Si la fonction GetVehicleLiveryCount est disponible
        liveryCount = GetVehicleLiveryCount(currentVehicle);
    } else {
        // Par défaut, supposons qu'il y a au moins quelques livrées
        liveryCount = 5;
    }
    
    if (liveryCount > 0) {
        hasExteriorOptions = true;
        
        const modItem = `
            <div class="mod-item" data-category="livery">
                <div class="mod-item-title">Livery</div>
                <div class="mod-item-level" id="livery-level">${vehicleData.livery > 0 ? "Style " + vehicleData.livery : "Aucun"}</div>
                <div class="selection">
                    <div class="ligne"></div>
                    <div class="rond" id="livery-slider"></div>
                    <div class="fleches" id="livery-right">
                        <div class="fleche"></div>
                        <div class="fleche-2"></div>
                    </div>
                    <div class="fleches-2" id="livery-left">
                        <div class="fleche"></div>
                        <div class="fleche-2"></div>
                    </div>
                </div>
            </div>
        `;
        
        $('#exterior-container').append(modItem);
        
        // Initialiser le slider pour livery
        const lineWidth = 260;
        const maxLivery = Math.max(1, liveryCount); // Éviter la division par zéro
        let liveryPos = 0;
        if (vehicleData.livery !== undefined && vehicleData.livery >= 0) {
            liveryPos = (vehicleData.livery / maxLivery) * lineWidth;
        }
        $(`#livery-slider`).css('left', 45 + liveryPos);
        
        // Gestionnaires d'événements pour livery
        $(`#livery-left`).click(() => changeLivery(-1, maxLivery));
        $(`#livery-right`).click(() => changeLivery(1, maxLivery));
    }
    
    // Si aucune option n'est disponible, afficher un message
    if (!hasExteriorOptions) {
        $('#exterior-container').append(`
            <div class="mod-item-title2" style="margin: 20px 0; text-align: center;">
                Aucune option d'extérieur disponible pour ce véhicule
            </div>
        `);
    }
    
    // Initialiser les sliders glissables
    makeSlidersDraggable();
  }
  
  // Fonction pour changer de livery
  function changeLivery(change, maxLivery) {
    let currentLivery = vehicleData.livery || 0;
    let newLivery = currentLivery + change;
    
    // Vérifier les limites
    if (newLivery < 0) newLivery = 0;
    if (newLivery >= maxLivery) newLivery = maxLivery - 1;
    
    // Mettre à jour si changement
    if (newLivery !== currentLivery) {
        // Mettre à jour la donnée locale
        vehicleData.livery = newLivery;
        
        // Mettre à jour l'interface
        $('#livery-level').text(newLivery > 0 ? "Style " + newLivery : "Aucun");
        
        // Calculer la position du slider
        const lineWidth = 260;
        const position = (newLivery / maxLivery) * lineWidth;
        $('#livery-slider').css('left', 45 + position);
        
        // Appliquer la modification au véhicule via NUI
        applyModification('livery', newLivery);
    }
  }
  
  // Fonction pour rendre les sliders glissables
  function makeSlidersDraggable() {
    // Sélectionne tous les sliders
    $('.rond').each(function() {
        const slider = $(this);
        const sliderId = slider.attr('id');
        if (!sliderId) return;
        
        const category = sliderId.replace('-slider', '');
        
        // Vérifier si le slider est désactivé
        if (slider.css('cursor') === 'not-allowed') return;
        
        const sliderParent = slider.parent();
        const lineWidth = 260; // Largeur de la ligne en pixels
        let isDragging = false;
        
        // Fonction pour calculer le niveau à partir de la position
        function getLevelFromPosition(position) {
            // Convertir la position en pourcentage de la ligne
            const lineStart = 45; // Position de début du slider
            const relativePosition = position - lineStart;
            
            if (relativePosition <= 0) return 0;
            
            // Déterminer le niveau max et les données
            let maxLevel = 1;
            let data;
            
            if (category === 'engine' || category === 'brakes' || category === 'transmission' || category === 'suspension' || category === 'armor') {
                data = performanceCategories[category];
                maxLevel = data.maxLevel;
            } else if (category === 'windowTint') {
                maxLevel = windowTints.length - 1;
            } else if (category === 'wheelType') {
                maxLevel = wheelCategories.wheelType.types.length - 1;
            } else if (category === 'livery') {
                // Déterminer le nombre de livrées disponibles
                let liveryCount = 0;
                if (vehicleData.livery !== undefined) {
                    liveryCount = vehicleData.livery + 5; // Estimation
                } else if (typeof GetVehicleLiveryCount === 'function') {
                    liveryCount = GetVehicleLiveryCount(currentVehicle);
                } else {
                    liveryCount = 5; // Valeur par défaut
                }
                maxLevel = Math.max(1, liveryCount);
            } else if (exteriorCategories[category]) {
                data = exteriorCategories[category];
                maxLevel = data.maxLevel;
            } else if (interiorCategories[category]) {
                data = interiorCategories[category];
                maxLevel = data.maxLevel;
            } else if (category === 'frontWheel' || category === 'backWheel') {
                data = wheelCategories[category];
                maxLevel = data.maxLevel;
            }
            
            if (maxLevel <= 0) return 0;
            
            if (relativePosition >= lineWidth) return maxLevel;
            
            // Amélioration: calcul du niveau avec arrondi à l'entier le plus proche
            const levelFloat = (relativePosition / lineWidth) * maxLevel;
            return Math.round(levelFloat);
        }
        
        // Gestionnaire de début de glisser
        slider.on('mousedown touchstart', function(e) {
            e.preventDefault();
            isDragging = true;
            
            // Ajouter une classe pour indiquer que le slider est actif
            slider.addClass('dragging');
            
            // Désactiver la sélection de texte pendant le glissement
            $('body').css('user-select', 'none');
        });
        
        // Gestionnaire de mouvement pendant le glisser
        $(document).on('mousemove touchmove', function(e) {
            if (!isDragging) return;
            
            let clientX;
            if (e.type === 'touchmove') {
                clientX = e.originalEvent.touches[0].clientX;
            } else {
                clientX = e.clientX;
            }
            
            // Calculer la position relative à la ligne du slider
            const sliderRect = sliderParent[0].getBoundingClientRect();
            const newPosition = clientX - sliderRect.left;
            
            // Limiter la position au début et à la fin de la ligne
            const minPosition = 45; // Position minimale (début de la ligne)
            const maxPosition = minPosition + lineWidth; // Position maximale (fin de la ligne)
            const clampedPosition = Math.max(minPosition, Math.min(newPosition, maxPosition));
            
            // Déplacer le rond du slider
            slider.css('left', clampedPosition + 'px');
            
            // Calculer et appliquer le niveau correspondant
            const newLevel = getLevelFromPosition(clampedPosition);
            
            // Appliquer la modification selon la catégorie
            applyLevelToCategory(category, newLevel, clampedPosition, minPosition, lineWidth);
        });
        
        // Gestionnaire de fin de glisser
        $(document).on('mouseup touchend', function() {
            if (isDragging) {
                isDragging = false;
                slider.removeClass('dragging');
                $('body').css('user-select', '');
            }
        });
    });
  }
  
  function applyLevelToCategory(category, newLevel, clampedPosition, minPosition, lineWidth) {
    if (category === 'windowTint') {
        // Cas spécial pour les teintes de vitres
        const tintIndex = Math.min(Math.floor((clampedPosition - minPosition) / (lineWidth / (windowTints.length - 1))), windowTints.length - 1);
        if (tintIndex >= 0 && windowTints[tintIndex]) {
            // Mettre à jour les états actifs
            for (let i = 0; i < windowTints.length; i++) {
                windowTints[i].active = (i === tintIndex);
            }
            
            // Mettre à jour l'interface
            $('#windowTint-level').text(windowTints[tintIndex].name);
            
            // Appliquer la modification
            applyModification('windowTint', windowTints[tintIndex].id);
        }
    } else if (category === 'wheelType') {
        // Cas spécial pour les types de roues
        const types = wheelCategories.wheelType.types;
        const typeIndex = Math.min(Math.floor((clampedPosition - minPosition) / (lineWidth / (types.length - 1))), types.length - 1);
        if (typeIndex >= 0 && types[typeIndex]) {
            // Mettre à jour les états actifs
            for (let i = 0; i < types.length; i++) {
                types[i].active = (i === typeIndex);
            }
            
            // Mettre à jour l'interface
            $('#wheelType-level').text(types[typeIndex].name);
            
            // Appliquer la modification
            applyModification('wheelType', types[typeIndex].id);
        }
    } else if (category === 'livery') {
        // Cas spécial pour livery
        // Mettre à jour l'interface
        $('#livery-level').text(newLevel > 0 ? "Style " + newLevel : "Aucun");
        
        // Mettre à jour les données
        vehicleData.livery = newLevel;
        
        // Appliquer la modification
        applyModification('livery', newLevel);
    } else {
        // Pour les autres catégories (performances, extérieur, intérieur, roues)
        let data;
        let currentLevel;
        
        if (category === 'engine' || category === 'brakes' || category === 'transmission' || category === 'suspension' || category === 'armor') {
            data = performanceCategories[category];
        } else if (exteriorCategories[category]) {
            data = exteriorCategories[category];
        } else if (interiorCategories[category]) {
            data = interiorCategories[category];
        } else if (category === 'frontWheel' || category === 'backWheel') {
            data = wheelCategories[category];
        }
        
        if (data) {
            currentLevel = data.current || 0;
            const maxLevel = data.maxLevel || 0;
            
            if (newLevel !== currentLevel && newLevel <= maxLevel) {
                // Mettre à jour les données
                data.current = newLevel;
                
                // Mettre à jour l'interface
                $(`#${category}-level`).text(newLevel === 0 ? "Aucun" : "Niveau " + newLevel);
                
                // Appliquer la modification
                applyModification(category, newLevel);
            }
        }
    }
  }
  
  
  // Génération de la section peinture
  // Génération de la section phares xenon
  function generateXenonSection() {
    const xenonSection = $("#xenon-section");
    
    // Activer/désactiver les xenons
    xenonSection.append(`
      <div class="color-section">
        <div class="color-section-header">
          <div class="color-title">Phares Xenon</div>
        </div>
        
        <div class="color-content">
          <div class="extra-toggle">
            <div class="extra-toggle-btn ${vehicleData.xenonEnabled ? 'active' : ''}" id="xenon-main-toggle"></div>
            <div class="extra-toggle-label">Activer les phares xenon</div>
          </div>
        </div>
      </div>
    `);
    
    // Couleurs des phares xenon
    xenonSection.append(`
      <div class="color-section">
        <div class="color-section-header">
          <div class="color-title">Couleur des phares</div>
        </div>
        
        <div class="color-content">
          <div class="xenon-colors-grid">
            <div class="color-item xenon-color" data-color="-1" style="background-color: #ffffff"><span>Défaut</span></div>
            <div class="color-item xenon-color" data-color="0" style="background-color: #ffffff"><span>Blanc</span></div>
            <div class="color-item xenon-color" data-color="1" style="background-color: #0000ff"><span>Bleu</span></div>
            <div class="color-item xenon-color" data-color="2" style="background-color: #0080ff"><span>Bleu E.</span></div>
            <div class="color-item xenon-color" data-color="3" style="background-color: #00ff80"><span>Vert M.</span></div>
            <div class="color-item xenon-color" data-color="4" style="background-color: #80ff00"><span>Vert L.</span></div>
            <div class="color-item xenon-color" data-color="5" style="background-color: #ffff00"><span>Jaune</span></div>
            <div class="color-item xenon-color" data-color="6" style="background-color: #ffc800"><span>Or</span></div>
            <div class="color-item xenon-color" data-color="7" style="background-color: #ff8000"><span>Orange</span></div>
            <div class="color-item xenon-color" data-color="8" style="background-color: #ff0000"><span>Rouge</span></div>
            <div class="color-item xenon-color" data-color="9" style="background-color: #ff00ff"><span>Rose</span></div>
            <div class="color-item xenon-color" data-color="10" style="background-color: #8000ff"><span>Violet</span></div>
            <div class="color-item xenon-color" data-color="11" style="background-color: #000000"><span>Noir</span></div>
          </div>
          <button class="apply-color-btn" id="apply-xenon-color">Appliquer</button>
        </div>
      </div>
    `);
    
    // Variable pour suivre la couleur xenon sélectionnée
    let selectedXenonColor = vehicleData.xenonColor;
    
    // Sélectionner la couleur xenon active
    if (vehicleData.xenonColor !== undefined) {
      $(`.xenon-color[data-color="${vehicleData.xenonColor}"]`).addClass('active');
    }
    
    // Gestionnaires d'événements
    $("#xenon-main-toggle").on("click", function() {
      const isActive = $(this).hasClass("active");
      if (isActive) {
        $(this).removeClass("active");
        applyModification("xenon", 0);
        showNotification("Phares xenon désactivés");
      } else {
        $(this).addClass("active");
        applyModification("xenon", 1);
        showNotification("Phares xenon activés");
      }
    });
    
    $(".xenon-color").on("click", function() {
      $(".xenon-color").removeClass("selected");
      $(this).addClass("selected");
      selectedXenonColor = parseInt($(this).data("color"));
    });
    
    $("#apply-xenon-color").on("click", function() {
      if (selectedXenonColor !== undefined) {
        // Appliquer la couleur
        applyModification("xenonColor", selectedXenonColor);
        
        // Mettre à jour l'interface
        $(".xenon-color").removeClass("active");
        $(`.xenon-color[data-color="${selectedXenonColor}"]`).addClass("active");
        
        // Activer les xenons si pas déjà actifs
        if (!$("#xenon-main-toggle").hasClass("active")) {
          $("#xenon-main-toggle").addClass("active");
          applyModification("xenon", 1);
        }
        
        // Notification
        const colorName = $(`.xenon-color[data-color="${selectedXenonColor}"] span`).text();
        showNotification(`Couleur de xenon: ${colorName}`);
      }
    });
  }
  

  





// Fonction pour trouver une couleur GTA par son ID
function findGTAColorById(id) {
    // Chercher dans toutes les collections de couleurs
    let collections = [vehicleColors, matteColors, metalColors];
    
    for (let collection of collections) {
        let color = collection.find(color => color.id === id);
        if (color) return color;
    }
    
    return null;
}

// Fonction pour trouver la couleur GTA la plus proche d'une valeur RGB
function findClosestGTAColor(r, g, b) {
    // Déterminer quelle collection utiliser en fonction du type de peinture actuel
    let colorsToCheck;
    
    if (currentPaintType === 3) {
        colorsToCheck = matteColors;
    } else if (currentPaintType === 4) {
        colorsToCheck = metalColors;
    } else {
        colorsToCheck = vehicleColors; // Pour les types 0, 1, 2, 5
    }
    
    let closestColor = colorsToCheck[0];
    let minDistance = Number.MAX_VALUE;
    
    for (const color of colorsToCheck) {
        const colorRgb = hexToRgb(color.color);
        
        // Calculer la distance de couleur (formule pondérée)
        const rDiff = r - colorRgb[0];
        const gDiff = g - colorRgb[1];
        const bDiff = b - colorRgb[2];
        
        const distance = Math.sqrt(
            rDiff * rDiff * 0.299 + 
            gDiff * gDiff * 0.587 + 
            bDiff * bDiff * 0.114
        );
        
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = color;
        }
    }
    
    return closestColor;
}
  // Fonction pour initialiser le canvas du sélecteur de couleur (modifiée)
  function initColorPickerCanvas(type) {
    // Au lieu d'un canvas, nous utilisons directement l'aperçu de couleur
    const previewDiv = $(`#${type}-preview`);
    
    // Si vehicleData est défini et a une couleur pour ce type, l'utiliser comme couleur initiale
    let initialRGB = [255, 0, 0];
    let initialColorId;
    
    if (type === "primary" && vehicleData.primaryColor !== undefined) {
      initialColorId = vehicleData.primaryColor;
      const colorObj = findGTAColorById(initialColorId);
      if (colorObj) {
        initialRGB = hexToRgb(colorObj.color);
      }
    } else if (type === "secondary" && vehicleData.secondaryColor !== undefined) {
      initialColorId = vehicleData.secondaryColor;
      const colorObj = findGTAColorById(initialColorId);
      if (colorObj) {
        initialRGB = hexToRgb(colorObj.color);
      }
    }
    
    // Mettre à jour la couleur d'aperçu initiale
    previewDiv.css('background-color', `rgb(${initialRGB[0]}, ${initialRGB[1]}, ${initialRGB[2]})`);
    
    // Convertir en HSB pour initialiser le slider de teinte
    const hsb = rgbToHsb(initialRGB[0], initialRGB[1], initialRGB[2]);
    
    // Mettre à jour le slider de teinte
    $(`#${type}-hue-slider`).val(hsb[0]);
    
    // Mettre à jour les valeurs RGB et HSB
    updateRGBInputs(type, initialRGB[0], initialRGB[1], initialRGB[2]);
    
    // Ajouter l'événement de clic sur l'aperçu
    previewDiv.on('click', function() {
      // Ouvrir le sélecteur de couleur personnalisée quand on clique sur l'aperçu
      $(`.color-tab[data-tab="custom"][data-target="${type}"]`).click();
    });
    
    // Initialiser le slider de teinte
    $(`#${type}-hue-slider`).on('input', function() {
      const hue = parseInt($(this).val());
      
      // Mettre à jour la valeur H
      $(`#${type}-h-value`).val(hue);
      
      // Récupérer les valeurs S et B actuelles
      const s = parseInt($(`#${type}-s-value`).val());
      const b = parseInt($(`#${type}-b-value`).val());
      
      // Convertir en RGB et mettre à jour
      const newRGB = hsbToRgb(hue, s, b);
      updateRGBInputs(type, newRGB[0], newRGB[1], newRGB[2]);
      
      // Mettre à jour l'aperçu
      $(`#${type}-preview`).css('background-color', `rgb(${newRGB[0]}, ${newRGB[1]}, ${newRGB[2]})`);
    });
  }
  

function setupColorPickers() {
    ["primary", "secondary"].forEach(type => {
        // Mettre à jour les valeurs quand les sliders RGB changent
        $(`#${type}-r-slider, #${type}-g-slider, #${type}-b-slider`).on('input', function() {
            const r = parseInt($(`#${type}-r-slider`).val());
            const g = parseInt($(`#${type}-g-slider`).val());
            const b = parseInt($(`#${type}-b-slider`).val());
            
            $(`#${type}-r-value`).text(r);
            $(`#${type}-g-value`).text(g);
            $(`#${type}-b-value`).text(b);
            
            // Mettre à jour hex
            const hex = rgbToHex(r, g, b);
            $(`#${type}-hex-value`).val(hex);
            
            // Convertir en HSB et mettre à jour
            const hsb = rgbToHsb(r, g, b);
            $(`#${type}-h-value`).val(hsb[0]);
            $(`#${type}-s-value`).val(hsb[1]);
            $(`#${type}-b-value`).val(hsb[2]);
            
            // Mettre à jour l'aperçu
            $(`#${type}-preview`).css('background-color', `rgb(${r},${g},${b})`);
            
            // Appliquer après un délai (prévisualisation en direct)
            clearTimeout(window[`${type}ColorTimeout`]);
            window[`${type}ColorTimeout`] = setTimeout(() => {
                const closestColor = findClosestGTAColor(r, g, b);
                applyModification(`${type}Color`, closestColor.id);
                
                // Mettre à jour l'interface
                $(`.color-item[data-type='${type}']`).removeClass("active");
                $(`.color-item[data-type='${type}'][data-color='${closestColor.id}']`).addClass("active");
            }, 300);
        });
    });
}




function initializeColorMenu() {
  // Détecter le type de peinture actuel
  const currentPaintType = vehicleData.paintType !== undefined ? parseInt(vehicleData.paintType) : 0;
  
  // Sélectionner le bon type de peinture dans l'interface
  $(`.paint-type-item[data-type="${currentPaintType}"]`).addClass('active');
  
  // Gérer la visibilité de la section nacrée
  if (currentPaintType === 1 || currentPaintType === 2) {
      $("#pearl-section").show();
  } else {
      $("#pearl-section").hide();
  }
  
  // Générer les palettes de couleurs
  generateColorPalette("primary", vehicleData.primaryColor, currentPaintType);
  generateColorPalette("secondary", vehicleData.secondaryColor, currentPaintType);
  generateColorPalette("pearl", vehicleData.pearlColor, 1); // Force type métallique pour nacrée
  
  console.log("Menu des couleurs initialisé avec type de peinture:", currentPaintType);
}

$("#color-btn").click(() => {
  // Masquer tous les conteneurs
  $(".modif").hide();
  // Afficher le conteneur des couleurs
  $("#color-container").show();
  // Mettre à jour la classe active
  $(".liste > div").removeClass("active");
  $("#color-btn").addClass("active");
  // Générer l'UI des couleurs
  generateColorUI();
  // Envoyer le changement de catégorie
  $.post(
      "https://custom/changeCategory",
      JSON.stringify({
          category: "color"
      })
  );
});
  
  function setupColorTabs() {
    $(".color-tab").off('click').on("click", function() {
        const tabType = $(this).data("tab");
        const target = $(this).data("target");
        const section = $(this).closest(".color-section");
        
        // Mettre à jour les onglets
        section.find(".color-tab").removeClass("active");
        $(this).addClass("active");
        
        // Afficher le contenu approprié
        if (tabType === "simple") {
            $(`#${target}-simple-content`).show();
            $(`#${target}-custom-content`).hide();
        } else {
            $(`#${target}-simple-content`).hide();
            $(`#${target}-custom-content`).show();
        }
    });
}
  // Ajouter cette ligne dans generatePaintSection() juste avant setupColorExpandButtons();
  function initializePaintSections() {
    // Définir l'état initial de toutes les sections
    $(".color-section").each(function() {
      $(this).attr("data-expanded", "true");
    });
    
    // Vérifier l'état des onglets et s'assurer que seul le contenu pertinent est visible
    $(".color-tab.active").each(function() {
      const tabType = $(this).data("tab");
      const target = $(this).data("target");
      
      if (tabType === "simple") {
        $(`#${target}-custom-content`).hide();
        $(`#${target}-simple-content`).show();
      } else {
        $(`#${target}-simple-content`).hide();
        $(`#${target}-custom-content`).show();
      }
    });
    
    // Appliquer les gestionnaires d'événements
    setupColorTabs();
    setupColorExpandButtons();
  }




  function setLiveColorPreview(type) {
    // Ajouter un div d'aperçu s'il n'existe pas déjà
    if ($(`#${type}-preview`).length === 0) {
      $(`#${type}-custom-content`).prepend(`<div id="${type}-preview" class="color-preview"></div>`);
    }
    
    // Mettre à jour l'aperçu à chaque changement de slider
    $(`#${type}-r-slider, #${type}-g-slider, #${type}-b-slider`).off('input').on("input", function() {
        const r = parseInt($(`#${type}-r-slider`).val());
        const g = parseInt($(`#${type}-g-slider`).val());
        const b = parseInt($(`#${type}-b-slider`).val());
        
        // Mettre à jour l'aperçu
        $(`#${type}-preview`).css("background-color", `rgb(${r},${g},${b})`);
        $(`#${type}-preview`).addClass("color-changed");
        setTimeout(() => $(`#${type}-preview`).removeClass("color-changed"), 300);
        
        // Mettre à jour les valeurs RGB affichées
        $(`#${type}-r-value`).text(r);
        $(`#${type}-g-value`).text(g);
        $(`#${type}-b-value`).text(b);
        
        // Mettre à jour la valeur hexadécimale
        const hex = rgbToHex(r, g, b);
        $(`#${type}-hex-value`).val(hex);
        
        // Convertir RGB en HSB et mettre à jour les valeurs HSB
        const hsb = rgbToHsb(r, g, b);
        $(`#${type}-h-value`).val(hsb[0]);
        $(`#${type}-s-value`).val(hsb[1]);
        $(`#${type}-b-value`).val(hsb[2]);
        
        // Appliquer la couleur après un délai plus long pour éviter trop d'appels
        clearTimeout(window[`${type}ColorTimeout`]);
        window[`${type}ColorTimeout`] = setTimeout(() => {
          const closestColor = findClosestGTAColor(r, g, b);
          
          // Forcer l'application via le callback existant avec des paramètres plus explicites
          applyModification(`${type}Color`, closestColor.id);
          
          // Mettre en évidence la couleur correspondante dans la palette, si elle existe
          $(`.color-item[data-type="${type}"]`).removeClass("active");
          $(`.color-item[data-type="${type}"][data-color="${closestColor.id}"]`).addClass("active");
        }, 500); // Délai plus long (500ms au lieu de 300ms)
      });
    
    // Appliquer la couleur à chaque changement de hex
    $(`#${type}-hex-value`).off('change input').on("change input", function() {
      const hex = $(this).val();
      if (/^#[0-9A-F]{6}$/i.test(hex)) {
        const rgb = hexToRgb(hex);
        
        // Mettre à jour les sliders
        $(`#${type}-r-slider`).val(rgb[0]);
        $(`#${type}-g-slider`).val(rgb[1]);
        $(`#${type}-b-slider`).val(rgb[2]);
        
        // Mettre à jour les valeurs
        $(`#${type}-r-value`).text(rgb[0]);
        $(`#${type}-g-value`).text(rgb[1]);
        $(`#${type}-b-value`).text(rgb[2]);
        
        // Mettre à jour l'aperçu
        $(`#${type}-preview`).css("background-color", `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
        
        // Appliquer la couleur
        clearTimeout(window[`${type}ColorTimeout`]);
        window[`${type}ColorTimeout`] = setTimeout(() => {
          const closestColor = findClosestGTAColor(rgb[0], rgb[1], rgb[2]);
          applyModification(`${type}Color`, closestColor.id);
          
          // Mise à jour des valeurs HSB pour garder tout en synchronisation
          updateColorValues(type, rgb[0], rgb[1], rgb[2]);
        }, 300);
      }
    });
    
    // Synchronisation complète pour les valeurs HSB
    $(`#${type}-h-value, #${type}-s-value, #${type}-b-value`).off('change input').on("change input", function() {
      const h = parseInt($(`#${type}-h-value`).val() || 0);
      const s = parseInt($(`#${type}-s-value`).val() || 0);
      const v = parseInt($(`#${type}-b-value`).val() || 0);
      
      // Convertir HSB en RGB
      const rgb = hsbToRgb(h, s, v);
      
      // Mettre à jour les sliders RGB et les valeurs
      $(`#${type}-r-slider`).val(rgb[0]);
      $(`#${type}-g-slider`).val(rgb[1]);
      $(`#${type}-b-slider`).val(rgb[2]);
      
      $(`#${type}-r-value`).text(rgb[0]);
      $(`#${type}-g-value`).text(rgb[1]);
      $(`#${type}-b-value`).text(rgb[2]);
      
      // Mettre à jour l'aperçu
      $(`#${type}-preview`).css("background-color", `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
      
      // Appliquer la couleur
      clearTimeout(window[`${type}ColorTimeout`]);
      window[`${type}ColorTimeout`] = setTimeout(() => {
        const closestColor = findClosestGTAColor(rgb[0], rgb[1], rgb[2]);
        applyModification(`${type}Color`, closestColor.id);
      }, 300);
    });
    
    // Mise à jour du slider de teinte
    $(`#${type}-hue-slider`).off('input').on('input', function() {
      const hue = parseInt($(this).val());
      
      // Mettre à jour la valeur H
      $(`#${type}-h-value`).val(hue);
      
      // Récupérer les valeurs S et B actuelles
      const s = parseInt($(`#${type}-s-value`).val() || 100);
      const v = parseInt($(`#${type}-b-value`).val() || 100);
      
      // Convertir HSB en RGB
      const rgb = hsbToRgb(hue, s, v);
      
      // Mettre à jour les sliders RGB et les valeurs
      $(`#${type}-r-slider`).val(rgb[0]);
      $(`#${type}-g-slider`).val(rgb[1]);
      $(`#${type}-b-slider`).val(rgb[2]);
      
      $(`#${type}-r-value`).text(rgb[0]);
      $(`#${type}-g-value`).text(rgb[1]);
      $(`#${type}-b-value`).text(rgb[2]);
      
      // Mettre à jour l'hex
      const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
      $(`#${type}-hex-value`).val(hex);
      
      // Mettre à jour l'aperçu
      $(`#${type}-preview`).css("background-color", `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
      
      // Appliquer la couleur après un délai
      clearTimeout(window[`${type}ColorTimeout`]);
      window[`${type}ColorTimeout`] = setTimeout(() => {
        const closestColor = findClosestGTAColor(rgb[0], rgb[1], rgb[2]);
        applyModification(`${type}Color`, closestColor.id);
      }, 300);
    });
  }

  function updateColorValues(type, r, g, b) {
    // Mettre à jour les valeurs RGB affichées
    $(`#${type}-r-value`).text(r);
    $(`#${type}-g-value`).text(g);
    $(`#${type}-b-value`).text(b);
    
    // Mettre à jour la valeur hexadécimale
    const hex = rgbToHex(r, g, b);
    $(`#${type}-hex-value`).val(hex);
    
    // Convertir RGB en HSB et mettre à jour les valeurs HSB
    const hsb = rgbToHsb(r, g, b);
    $(`#${type}-h-value`).val(hsb[0]);
    $(`#${type}-s-value`).val(hsb[1]);
    $(`#${type}-b-value`).val(hsb[2]);
    
    // Mettre à jour le slider de teinte
    $(`#${type}-hue-slider`).val(hsb[0]);
  }
  
// Assurons-nous que vehicleColors est bien défini globalement
window.vehicleColors = {
  // Couleurs standards/classiques (type 0)
  standard: [
      { id: 0, name: "Noir", color: "#0d1116" },
      { id: 1, name: "Graphite", color: "#1c1d21" },
      { id: 2, name: "Noir Acier", color: "#32383d" },
      { id: 3, name: "Gris Foncé", color: "#454b4f" },
      { id: 4, name: "Gris Argenté", color: "#999da0" },
      { id: 5, name: "Gris Acier", color: "#c2c4c6" },
      { id: 6, name: "Argenté", color: "#979a97" },
      { id: 7, name: "Bleu Argenté", color: "#637380" },
      { id: 8, name: "Gris Roulé", color: "#63625c" },
      { id: 9, name: "Argenté Ombré", color: "#3c3f47" },
      { id: 10, name: "Pierre", color: "#444e54" },
      { id: 11, name: "Noir Minuit", color: "#1f2226" },
      { id: 12, name: "Gris Anthracite", color: "#13181f" },
      { id: 13, name: "Noir Réplica", color: "#26282a" },
      { id: 14, name: "Carbone", color: "#1e2429" },
      { id: 15, name: "Bleu Graphite", color: "#31383f" },
      { id: 16, name: "Rouge Foncé", color: "#7a0101" },
      { id: 17, name: "Rouge Cabernet", color: "#620022" },
      { id: 18, name: "Rouge Vin", color: "#320000" },
      { id: 19, name: "Rose Pastel", color: "#ba676f" },
      { id: 20, name: "Rouge Saumon", color: "#ed7176" },
      { id: 21, name: "Rouge Vermillon", color: "#cf1f21" },
      { id: 22, name: "Orange", color: "#f44d00" },
      { id: 23, name: "Rouge Clair", color: "#B22222" },
      { id: 24, name: "Jaune Crème", color: "#fde7a9" },
      { id: 25, name: "Jaune Citron", color: "#ffc91f" },
      { id: 26, name: "Jaune", color: "#fcf64a" },
      { id: 27, name: "Lime", color: "#84c365" },
      { id: 28, name: "Vert Feuille", color: "#4e6443" },
      { id: 29, name: "Racing Green", color: "#132428" },
      { id: 30, name: "Olive", color: "#6d6c3c" },
      { id: 31, name: "Vert Forêt", color: "#222e46" },
      { id: 32, name: "Vert Prairie", color: "#6f8c51" },
      { id: 33, name: "Vert Racing", color: "#66b81f" },
      { id: 34, name: "Vert Marin", color: "#22383e" },
      { id: 35, name: "Sarcelle Foncé", color: "#1f5a3a" },
      { id: 36, name: "Turquoise", color: "#509079" },
      { id: 37, name: "Bleu Mer", color: "#1d5a76" },
      { id: 38, name: "Bleu Marine", color: "#112552" },
      { id: 39, name: "Bleu Horizon", color: "#1a1d24" },
      { id: 40, name: "Ultra Bleu", color: "#253351" },
      { id: 41, name: "Bleu Saxo", color: "#1c3551" },
      { id: 42, name: "Bleu Galaxie", color: "#151921" },
      { id: 43, name: "Bleu Diamant", color: "#193e6f" },
      { id: 44, name: "Surf Bleu", color: "#5c889e" },
      { id: 45, name: "Bleu Nautique", color: "#525661" },
      { id: 46, name: "Bleu Délavé", color: "#8ea8b0" },
      { id: 47, name: "Bleue Schafter", color: "#202c3b" },
      { id: 48, name: "Mauve Spinnaker", color: "#635f60" },
      { id: 49, name: "Violet Pourpre", color: "#260C3A" },
      { id: 50, name: "Violet Minuit", color: "#2c0a57" },
      { id: 51, name: "Violet Schafter", color: "#161629" },
      { id: 52, name: "Violet Clair", color: "#483B63" },
      { id: 53, name: "Blanc Crème", color: "#E5E5E5" },
      { id: 54, name: "Crème Glacée", color: "#FBFCF4" },
      { id: 55, name: "Blanc Neige", color: "#FFFFFF" },
      { id: 56, name: "Blanc Frost", color: "#F2F2F2" },
      { id: 57, name: "Beige Hêtre", color: "#c1ab6c" },
      { id: 58, name: "Brun Van", color: "#5b391b" },
      { id: 59, name: "Beige Platane", color: "#6b6b6b" },
      { id: 60, name: "Brun Terre", color: "#3b2e2a" },
      { id: 61, name: "Brun Désert", color: "#7b6c5a" },
      { id: 62, name: "Brun Noisette", color: "#5a4d41" },
      { id: 63, name: "Beige Pierre", color: "#d0c0b1" }
  ],
  // Couleurs métalliques (type 1)
  metallic: [
      { id: 64, name: "Métal Noir", color: "#0d1116" },
      { id: 65, name: "Métal Graphite", color: "#1c1d21" },
      { id: 66, name: "Métal Noir Acier", color: "#32383d" },
      { id: 67, name: "Métal Gris Foncé", color: "#454b4f" },
      { id: 68, name: "Métal Gris Argenté", color: "#999da0" },
      { id: 69, name: "Métal Gris Acier", color: "#c2c4c6" },
      { id: 70, name: "Métal Argenté", color: "#979a97" },
      { id: 71, name: "Métal Bleu Argenté", color: "#637380" },
      { id: 72, name: "Métal Gris Roulé", color: "#63625c" },
      { id: 73, name: "Métal Argenté Ombré", color: "#3c3f47" },
      { id: 74, name: "Métal Pierre", color: "#444e54" },
      { id: 75, name: "Métal Noir Minuit", color: "#1f2226" },
      { id: 76, name: "Métal Gris Anthracite", color: "#13181f" },
      { id: 77, name: "Métal Noir Réplica", color: "#26282a" },
      { id: 78, name: "Métal Carbone", color: "#1e2429" },
      { id: 79, name: "Métal Bleu Graphite", color: "#31383f" },
      { id: 80, name: "Métal Rouge Foncé", color: "#7a0101" },
      { id: 81, name: "Métal Rouge Cabernet", color: "#620022" },
      { id: 82, name: "Métal Rouge Vin", color: "#320000" },
      { id: 83, name: "Métal Rose Pastel", color: "#ba676f" },
      { id: 84, name: "Métal Rouge Saumon", color: "#ed7176" },
      { id: 85, name: "Métal Rouge Vermillon", color: "#cf1f21" },
      { id: 86, name: "Métal Orange", color: "#f44d00" },
      { id: 87, name: "Métal Rouge Clair", color: "#B22222" },
      { id: 88, name: "Métal Jaune Crème", color: "#fde7a9" },
      { id: 89, name: "Métal Jaune Citron", color: "#ffc91f" },
      { id: 90, name: "Métal Jaune", color: "#fcf64a" },
      { id: 91, name: "Métal Lime", color: "#84c365" },
      { id: 92, name: "Métal Vert Feuille", color: "#4e6443" },
      { id: 93, name: "Métal Racing Green", color: "#132428" },
      { id: 94, name: "Métal Olive", color: "#6d6c3c" },
      { id: 95, name: "Métal Vert Forêt", color: "#222e46" },
      { id: 96, name: "Métal Vert Prairie", color: "#6f8c51" },
      { id: 97, name: "Métal Vert Racing", color: "#66b81f" },
      { id: 98, name: "Métal Vert Marin", color: "#22383e" },
      { id: 99, name: "Métal Sarcelle Foncé", color: "#1f5a3a" },
      { id: 100, name: "Métal Turquoise", color: "#509079" },
      { id: 101, name: "Métal Bleu Mer", color: "#1d5a76" },
      { id: 102, name: "Métal Bleu Marine", color: "#112552" },
      { id: 103, name: "Métal Bleu Horizon", color: "#1a1d24" },
      { id: 104, name: "Métal Ultra Bleu", color: "#253351" },
      { id: 105, name: "Métal Bleu Saxo", color: "#1c3551" },
      { id: 106, name: "Métal Bleu Galaxie", color: "#151921" },
      { id: 107, name: "Métal Bleu Diamant", color: "#193e6f" },
      { id: 108, name: "Métal Surf Bleu", color: "#5c889e" },
      { id: 109, name: "Métal Bleu Nautique", color: "#525661" },
      { id: 110, name: "Métal Bleu Délavé", color: "#8ea8b0" },
      { id: 111, name: "Métal Bleue Schafter", color: "#202c3b" },
      { id: 112, name: "Métal Mauve Spinnaker", color: "#635f60" },
      { id: 113, name: "Métal Violet Pourpre", color: "#260C3A" },
      { id: 114, name: "Métal Violet Minuit", color: "#2c0a57" },
      { id: 115, name: "Métal Violet Schafter", color: "#161629" },
      { id: 116, name: "Métal Violet Clair", color: "#483B63" },
      { id: 117, name: "Métal Blanc Crème", color: "#E5E5E5" },
      { id: 118, name: "Métal Crème Glacée", color: "#FBFCF4" },
      { id: 119, name: "Métal Blanc Neige", color: "#FFFFFF" },
      { id: 120, name: "Métal Blanc Frost", color: "#F2F2F2" },
      { id: 121, name: "Métal Beige Hêtre", color: "#c1ab6c" },
      { id: 122, name: "Métal Brun Van", color: "#5b391b" },
      { id: 123, name: "Métal Beige Platane", color: "#6b6b6b" },
      { id: 124, name: "Métal Brun Terre", color: "#3b2e2a" },
      { id: 125, name: "Métal Brun Désert", color: "#7b6c5a" },
      { id: 126, name: "Métal Brun Noisette", color: "#5a4d41" },
      { id: 127, name: "Métal Beige Pierre", color: "#d0c0b1" }
  ],
  // Couleurs mate (type 3)
  matte: [
      { id: 128, name: "Mat Noir", color: "#0d1116" },
      { id: 129, name: "Mat Gris", color: "#32383d" },
      { id: 130, name: "Mat Gris Clair", color: "#999da0" },
      { id: 131, name: "Mat Blanc Glacé", color: "#FFFFFF" },
      { id: 132, name: "Mat Bleu", color: "#1d5a76" },
      { id: 133, name: "Mat Bleu Foncé", color: "#112552" },
      { id: 134, name: "Mat Violet Minuit", color: "#2c0a57" },
      { id: 135, name: "Mat Violet", color: "#483B63" },
      { id: 136, name: "Mat Rouge", color: "#cf1f21" },
      { id: 137, name: "Mat Rouge Foncé", color: "#7a0101" },
      { id: 138, name: "Mat Orange", color: "#f44d00" },
      { id: 139, name: "Mat Jaune", color: "#fcf64a" },
      { id: 140, name: "Mat Lime", color: "#84c365" },
      { id: 141, name: "Mat Vert", color: "#4e6443" },
      { id: 142, name: "Mat Vert Forêt", color: "#222e46" },
      { id: 143, name: "Mat Beige", color: "#c1ab6c" },
      { id: 144, name: "Mat Brun Clair", color: "#7b6c5a" },
      { id: 145, name: "Mat Brun Foncé", color: "#3b2e2a" },
      { id: 146, name: "Mat Olive", color: "#6d6c3c" },
      { id: 147, name: "Mat Tan", color: "#d0c0b1" },
      { id: 148, name: "Mat Vert Armée", color: "#4d5d44" }
  ],
  // Couleurs métal (type 2)
  metal: [
      { id: 149, name: "Brossé Acier", color: "#999da0" },
      { id: 150, name: "Brossé Noir Acier", color: "#1c1d21" },
      { id: 151, name: "Brossé Aluminium", color: "#c2c4c6" },
      { id: 152, name: "Chrome", color: "#e6e6e6" },
      { id: 153, name: "Or", color: "#d4af37" },
      { id: 154, name: "Bronze", color: "#cd7f32" },
      { id: 155, name: "Or Rosé", color: "#e5c1a7" },
      { id: 156, name: "Pur Gold", color: "#af9f6f" },
      { id: 157, name: "Brossé Or", color: "#d4af37" },
      { id: 158, name: "Argent Liquide", color: "#e6e6e6" }
  ],
  // Couleurs chameleon (type 4)
  chameleon: [
      { id: 159, name: "Chromatique", color: "#e6e6e6" }
  ]
};

// Variables globales pour les couleurs sélectionnées
window.selectedPrimaryColor = null;
window.selectedSecondaryColor = null;
window.selectedPearlColor = null;

// Fonction optimisée pour générer la palette de couleurs
function generateColorPalette(type, activeColorId, paintType) {
  console.log(`Génération palette ${type} avec paintType=${paintType} et activeColorId=${activeColorId}`);
  
  const grid = $(`.${type}-colors`);
  grid.empty();
  
  // Déterminer quelles couleurs afficher en fonction du type de peinture
  const paintTypeInt = parseInt(paintType || 0);
  let colorsToUse = [];
  
  // Utiliser la structure window.vehicleColors
  switch(paintTypeInt) {
      case 0: // Normal
          colorsToUse = window.vehicleColors.standard;
          break;
      case 1: // Métallique
          colorsToUse = window.vehicleColors.metallic;
          break;
      case 2: // Nacré
          colorsToUse = window.vehicleColors.metallic;
          break;
      case 3: // Mat
          colorsToUse = window.vehicleColors.matte;
          break;
      case 4: // Metal/Brossé
          colorsToUse = window.vehicleColors.metal;
          break;
      case 5: // Chrome
          colorsToUse = [{ id: 152, name: "Chrome", color: "#e6e6e6" }];
          break;
      default:
          colorsToUse = window.vehicleColors.standard;
  }
  
  console.log(`Affichage de ${colorsToUse.length} couleurs pour le type ${type} (paintType: ${paintTypeInt})`);
  
  // Générer les carrés de couleur
  colorsToUse.forEach(color => {
      const colorItem = $(`
          <div class="color-item" 
              style="background-color: ${color.color}" 
              data-color="${color.id}" 
              data-type="${type}" 
              title="${color.name}"></div>
      `);
      
      // Déterminer si la couleur est active
      if (activeColorId !== undefined && parseInt(color.id) === parseInt(activeColorId)) {
          colorItem.addClass("active");
      }
      
      // Gestionnaire d'événements pour la sélection de couleur
      colorItem.on("click", function() {
          $(`.color-item[data-type='${type}']`).removeClass("active selected");
          $(this).addClass("active selected");
          
          // Stockage de la couleur sélectionnée pour une application ultérieure
          const colorId = parseInt($(this).data("color"));
          
          if (type === "primary") {
              window.selectedPrimaryColor = colorId;
          } else if (type === "secondary") {
              window.selectedSecondaryColor = colorId;
          } else if (type === "pearl") {
              window.selectedPearlColor = colorId;
          }
          
          // Application immédiate de la couleur
          const colorType = type === "primary" ? "primaryColor" : 
                          type === "secondary" ? "secondaryColor" : "pearlColor";
          applyModification(colorType, colorId);
          
          // Notification
          showNotification(`Couleur ${color.name} appliquée`);
      });
      
      grid.append(colorItem);
  });
}

// Fonction pour générer la section de peinture
function generatePaintSection() {
  const paintSection = $("#paint-section");
  paintSection.empty();
  
  // Récupérer les valeurs actuelles du véhicule
  const currentPrimaryColor = vehicleData.primaryColor;
  const currentSecondaryColor = vehicleData.secondaryColor;
  const currentPearlColor = vehicleData.pearlColor;
  const currentPaintType = vehicleData.paintType !== undefined ? parseInt(vehicleData.paintType) : 0;
  
  // Initialiser les variables globales
  window.selectedPrimaryColor = currentPrimaryColor;
  window.selectedSecondaryColor = currentSecondaryColor;
  window.selectedPearlColor = currentPearlColor;
  
  // Section type de peinture
  paintSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Type de peinture</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content" id="paint-type-content">
        <div class="paint-type-grid">
          <div class="paint-type-item ${currentPaintType === 0 ? 'active' : ''}" data-type="0">
            <div class="paint-type-name">Normal</div>
            <div class="paint-type-price">$500</div>
          </div>
          <div class="paint-type-item ${currentPaintType === 1 ? 'active' : ''}" data-type="1">
            <div class="paint-type-name">Métallique</div>
            <div class="paint-type-price">$700</div>
          </div>
          <div class="paint-type-item ${currentPaintType === 2 ? 'active' : ''}" data-type="2">
            <div class="paint-type-name">Nacré</div>
            <div class="paint-type-price">$1000</div>
          </div>
          <div class="paint-type-item ${currentPaintType === 3 ? 'active' : ''}" data-type="3">
            <div class="paint-type-name">Mat</div>
            <div class="paint-type-price">$900</div>
          </div>
          <div class="paint-type-item ${currentPaintType === 4 ? 'active' : ''}" data-type="4">
            <div class="paint-type-name">Métal brossé</div>
            <div class="paint-type-price">$1200</div>
          </div>
          <div class="paint-type-item ${currentPaintType === 5 ? 'active' : ''}" data-type="5">
            <div class="paint-type-name">Chrome</div>
            <div class="paint-type-price">$1500</div>
          </div>
        </div>
      </div>
    </div>
  `);
  
  // Section couleur primaire
  paintSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Couleur primaire</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content" id="primary-content">
        <div class="color-grid primary-colors"></div>
      </div>
    </div>
  `);
  
  // Section couleur secondaire
  paintSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Couleur secondaire</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content" id="secondary-content">
        <div class="color-grid secondary-colors"></div>
      </div>
    </div>
  `);
  
  // Section couleur nacrée (seulement visible si type est métallique ou nacré)
  const showPearl = (currentPaintType === 1 || currentPaintType === 2);
  paintSection.append(`
    <div class="color-section" id="pearl-section" style="${showPearl ? '' : 'display: none;'}">
      <div class="color-section-header">
        <div class="color-title">Couleur nacrée</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content" id="pearl-content">
        <div class="color-grid pearl-colors"></div>
      </div>
    </div>
  `);
  
  // Générer les palettes de couleurs avec le type de peinture actuel
  console.log("Génération initiale des palettes avec currentPaintType =", currentPaintType);
  generateColorPalette("primary", currentPrimaryColor, currentPaintType);
  generateColorPalette("secondary", currentSecondaryColor, currentPaintType);
  
  // La couleur nacrée utilise toujours les couleurs standard/métalliques
  if (showPearl) {
      generateColorPalette("pearl", currentPearlColor, 1); // Force type métallique pour nacrée
  }
  
  // Gestionnaire pour les types de peinture
  $(".paint-type-item").off('click').on("click", function() {
      $(".paint-type-item").removeClass("active");
      $(this).addClass("active");
      const paintType = parseInt($(this).data("type"));
      
      // Gérer la visibilité de la section nacrée
      if (paintType === 1 || paintType === 2) {
          $("#pearl-section").slideDown(200);
          generateColorPalette("pearl", window.selectedPearlColor || currentPearlColor, 1);
      } else {
          $("#pearl-section").slideUp(200);
      }
      
      // Appliquer le type de peinture
      console.log("Changement de type de peinture vers", paintType);
      applyModification("paintType", paintType);
      
      // Mettre à jour les palettes de couleurs selon le type
      generateColorPalette("primary", window.selectedPrimaryColor || currentPrimaryColor, paintType);
      generateColorPalette("secondary", window.selectedSecondaryColor || currentSecondaryColor, paintType);
      
      // Message informatif
      const paintTypeName = $(this).find('.paint-type-name').text();
      showNotification(`Type de peinture: ${paintTypeName}`);
  });
  
  // Par défaut, toutes les sections sont ouvertes
  $(".color-section").attr("data-expanded", "true");
  
  // Configurer les boutons d'expansion
  setupColorExpandButtons();
}

// Fonction pour configurer les boutons d'expansion
function setupColorExpandButtons() {
  $(".color-expand-btn").off('click').on("click", function() {
      const section = $(this).closest(".color-section");
      const content = section.find(".color-content");
      const isExpanded = section.attr("data-expanded") === "true";
      
      if (isExpanded) {
          content.slideUp(200);
          section.attr("data-expanded", "false");
          $(this).html('<i class="fas fa-chevron-down"></i>');
      } else {
          content.slideDown(200);
          section.attr("data-expanded", "true");
          $(this).html('<i class="fas fa-chevron-up"></i>');
      }
  });
}

// Fonction UI de couleurs principale
function generateColorUI() {
  const colorContainer = $("#color-container");
  colorContainer.empty();
  
  // Barre d'onglets supérieure pour les différentes sections
  colorContainer.append(`
      <div class="top-icons-bar">
          <div class="icon-btn active" data-section="paint">
              <i class="fas fa-palette"></i>
              <span>Peinture</span>
          </div>
          <div class="icon-btn" data-section="headlights">
              <i class="fas fa-lightbulb"></i>
              <span>Phares</span>
          </div>
          <div class="icon-btn" data-section="neon">
              <i class="fas fa-bolt"></i>
              <span>Néons</span>
          </div>
          <div class="icon-btn" data-section="windows">
              <i class="fas fa-car-side"></i>
              <span>Vitres</span>
          </div>
      </div>
  `);
  
  // Génération des différentes sections
  colorContainer.append(`<div id="paint-section" class="section-content"></div>`);
  colorContainer.append(`<div id="headlights-section" class="section-content" style="display: none;"></div>`);
  colorContainer.append(`<div id="neon-section" class="section-content" style="display: none;"></div>`);
  colorContainer.append(`<div id="windows-section" class="section-content" style="display: none;"></div>`);
  
  // Générer le contenu des sections
  generatePaintSection();
  
  // Si les autres fonctions existent, les appeler aussi
  if (typeof generateHeadlightsSection === 'function') generateHeadlightsSection();
  if (typeof generateNeonSection === 'function') generateNeonSection();
  if (typeof generateWindowsSection === 'function') generateWindowsSection();
  
  // Gestionnaire d'événements pour les onglets supérieurs
  $(".icon-btn").off('click').on("click", function() {
      $(".icon-btn").removeClass("active");
      $(this).addClass("active");
      
      const section = $(this).data("section");
      $(".section-content").hide();
      $(`#${section}-section`).show();
  });
}


// Bouton pour ouvrir le menu des couleurs (suite)
$("#color-btn").click(() => {
  // Masquer tous les conteneurs
  $(".modif").hide();
  // Afficher le conteneur des couleurs
  $("#color-container").show();
  // Mettre à jour la classe active
  $(".liste > div").removeClass("active");
  $("#color-btn").addClass("active");
  // Générer l'UI des couleurs
  generateColorUI();
  // Envoyer le changement de catégorie
  $.post(
      "https://custom/changeCategory",
      JSON.stringify({
          category: "color"
      })
  );
});

// Fonction pour générer la section des phares
function generateHeadlightsSection() {
  const headlightsSection = $("#headlights-section");
  headlightsSection.empty();
  
  // Section xenon
  headlightsSection.append(`
      <div class="color-section">
          <div class="color-section-header">
              <div class="color-title">Phares Xenon</div>
          </div>
          
          <div class="color-content">
              <div class="extra-toggle">
                  <div class="extra-toggle-btn ${vehicleData.xenonEnabled ? 'active' : ''}" id="xenon-main-toggle"></div>
                  <div class="extra-toggle-label">Activer les phares xenon</div>
              </div>
          </div>
      </div>
  `);
  
  // Couleurs des phares xenon
  headlightsSection.append(`
      <div class="color-section">
          <div class="color-section-header">
              <div class="color-title">Couleur des phares</div>
          </div>
          
          <div class="color-content">
              <div class="xenon-colors-grid">
                  <div class="color-item xenon-color ${vehicleData.xenonColor === -1 ? 'active' : ''}" data-color="-1" style="background-color: #ffffff"><span>Défaut</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 0 ? 'active' : ''}" data-color="0" style="background-color: #ffffff"><span>Blanc</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 1 ? 'active' : ''}" data-color="1" style="background-color: #0000ff"><span>Bleu</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 2 ? 'active' : ''}" data-color="2" style="background-color: #0080ff"><span>Bleu E.</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 3 ? 'active' : ''}" data-color="3" style="background-color: #00ff80"><span>Vert M.</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 4 ? 'active' : ''}" data-color="4" style="background-color: #80ff00"><span>Vert L.</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 5 ? 'active' : ''}" data-color="5" style="background-color: #ffff00"><span>Jaune</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 6 ? 'active' : ''}" data-color="6" style="background-color: #ffc800"><span>Or</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 7 ? 'active' : ''}" data-color="7" style="background-color: #ff8000"><span>Orange</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 8 ? 'active' : ''}" data-color="8" style="background-color: #ff0000"><span>Rouge</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 9 ? 'active' : ''}" data-color="9" style="background-color: #ff00ff"><span>Rose</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 10 ? 'active' : ''}" data-color="10" style="background-color: #8000ff"><span>Violet</span></div>
                  <div class="color-item xenon-color ${vehicleData.xenonColor === 11 ? 'active' : ''}" data-color="11" style="background-color: #000000"><span>Noir</span></div>
              </div>
          </div>
      </div>
  `);
  
  // Gestionnaires d'événements
  $("#xenon-main-toggle").on("click", function() {
      const isActive = $(this).hasClass("active");
      if (isActive) {
          $(this).removeClass("active");
          applyModification("xenon", 0);
          showNotification("Phares xenon désactivés");
      } else {
          $(this).addClass("active");
          applyModification("xenon", 1);
          showNotification("Phares xenon activés");
      }
  });
  
  $(".xenon-color").on("click", function() {
      $(".xenon-color").removeClass("active selected");
      $(this).addClass("active selected");
      
      const colorId = parseInt($(this).data("color"));
      
      // Appliquer la couleur
      applyModification("xenonColor", colorId);
      
      // Activer les xenons si pas déjà actifs
      if (!$("#xenon-main-toggle").hasClass("active")) {
          $("#xenon-main-toggle").addClass("active");
          applyModification("xenon", 1);
      }
      
      // Notification
      const colorName = $(this).find("span").text();
      showNotification(`Couleur de xenon: ${colorName}`);
  });
}

// Fonction pour générer la section des vitres
function generateWindowsSection() {
  const windowsSection = $("#windows-section");
  windowsSection.empty();
  
  // Teinte des vitres
  windowsSection.append(`
      <div class="color-section">
          <div class="color-section-header">
              <div class="color-title">Teinte des vitres</div>
          </div>
          
          <div class="color-content">
              <div class="tint-options-grid">
                  <div class="tint-option ${vehicleData.windowTint === -1 ? 'active' : ''}" data-tint-id="-1">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Stock</div>
                          <div class="tint-price">$0</div>
                      </div>
                  </div>
                  <div class="tint-option ${vehicleData.windowTint === 0 ? 'active' : ''}" data-tint-id="0">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Aucune</div>
                          <div class="tint-price">$100</div>
                      </div>
                  </div>
                  <div class="tint-option ${vehicleData.windowTint === 1 ? 'active' : ''}" data-tint-id="1">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0.9)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Pure Black</div>
                          <div class="tint-price">$500</div>
                      </div>
                  </div>
                  <div class="tint-option ${vehicleData.windowTint === 2 ? 'active' : ''}" data-tint-id="2">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0.75)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Dark Smoke</div>
                          <div class="tint-price">$400</div>
                      </div>
                  </div>
                  <div class="tint-option ${vehicleData.windowTint === 3 ? 'active' : ''}" data-tint-id="3">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0.5)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Light Smoke</div>
                          <div class="tint-price">$300</div>
                      </div>
                  </div>
                  <div class="tint-option ${vehicleData.windowTint === 4 ? 'active' : ''}" data-tint-id="4">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0.85)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Limo</div>
                          <div class="tint-price">$600</div>
                      </div>
                  </div>
                  <div class="tint-option ${vehicleData.windowTint === 5 ? 'active' : ''}" data-tint-id="5">
                      <div class="tint-preview" style="background-color: rgba(0, 100, 0, 0.5)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Green</div>
                          <div class="tint-price">$300</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `);
  
  // Gestionnaires d'événements
  $(".tint-option").on("click", function() {
      $(".tint-option").removeClass("active selected");
      $(this).addClass("active selected");
      
      const tintId = parseInt($(this).data("tint-id"));
      
      // Appliquer la teinte
      applyModification("windowTint", tintId);
      
      // Notification
      const tintName = $(this).find(".tint-name").text();
      showNotification(`Teinte des vitres: ${tintName}`);
  });
}

// Fonction pour générer la section néons
function generateNeonSection() {
  const neonSection = $("#neon-section");
  neonSection.empty();
  
  // Activer/désactiver les néons
  neonSection.append(`
      <div class="color-section">
          <div class="color-section-header">
              <div class="color-title">Néons</div>
          </div>
          
          <div class="color-content">
              <div class="extra-toggle">
                  <div class="extra-toggle-btn ${vehicleData.neonsEnabled ? 'active' : ''}" id="neon-main-toggle"></div>
                  <div class="extra-toggle-label">Activer les néons</div>
              </div>
          </div>
      </div>
  `);
  
  // Position des néons
  neonSection.append(`
      <div class="color-section">
          <div class="color-section-header">
              <div class="color-title">Position des néons</div>
          </div>
          
          <div class="color-content">
              <div class="neon-positions">
                  <div class="extra-toggle">
                      <div class="extra-toggle-btn ${vehicleData.neonPositions && vehicleData.neonPositions[0] ? 'active' : ''}" data-position="0" id="neon-pos-0"></div>
                      <div class="extra-toggle-label">Néon avant</div>
                  </div>
                  <div class="extra-toggle">
                      <div class="extra-toggle-btn ${vehicleData.neonPositions && vehicleData.neonPositions[1] ? 'active' : ''}" data-position="1" id="neon-pos-1"></div>
                      <div class="extra-toggle-label">Néon arrière</div>
                  </div>
                  <div class="extra-toggle">
                      <div class="extra-toggle-btn ${vehicleData.neonPositions && vehicleData.neonPositions[2] ? 'active' : ''}" data-position="2" id="neon-pos-2"></div>
                      <div class="extra-toggle-label">Néon gauche</div>
                  </div>
                  <div class="extra-toggle">
                      <div class="extra-toggle-btn ${vehicleData.neonPositions && vehicleData.neonPositions[3] ? 'active' : ''}" data-position="3" id="neon-pos-3"></div>
                      <div class="extra-toggle-label">Néon droite</div>
                  </div>
              </div>
          </div>
      </div>
  `);
  
  // Couleur des néons
  neonSection.append(`
      <div class="color-section">
          <div class="color-section-header">
              <div class="color-title">Couleur des néons</div>
          </div>
          
          <div class="color-content">
              <div class="neon-colors-grid">
                  <div class="color-item neon-color" data-rgb="255,255,255" style="background-color: rgb(255,255,255)"><span>Blanc</span></div>
                  <div class="color-item neon-color" data-rgb="255,0,0" style="background-color: rgb(255,0,0)"><span>Rouge</span></div>
                  <div class="color-item neon-color" data-rgb="0,255,0" style="background-color: rgb(0,255,0)"><span>Vert</span></div>
                  <div class="color-item neon-color" data-rgb="0,0,255" style="background-color: rgb(0,0,255)"><span>Bleu</span></div>
                  <div class="color-item neon-color" data-rgb="255,255,0" style="background-color: rgb(255,255,0)"><span>Jaune</span></div>
                  <div class="color-item neon-color" data-rgb="0,255,255" style="background-color: rgb(0,255,255)"><span>Cyan</span></div>
                  <div class="color-item neon-color" data-rgb="255,0,255" style="background-color: rgb(255,0,255)"><span>Rose</span></div>
                  <div class="color-item neon-color" data-rgb="255,165,0" style="background-color: rgb(255,165,0)"><span>Orange</span></div>
                  <div class="color-item neon-color" data-rgb="128,0,128" style="background-color: rgb(128,0,128)"><span>Violet</span></div>
                  <div class="color-item neon-color" data-rgb="50,205,50" style="background-color: rgb(50,205,50)"><span>Lime</span></div>
                  <div class="color-item neon-color" data-rgb="255,20,147" style="background-color: rgb(255,20,147)"><span>Fuschia</span></div>
                  <div class="color-item neon-color" data-rgb="70,130,180" style="background-color: rgb(70,130,180)"><span>Azur</span></div>
              </div>
              
              <div class="neon-custom-colors">
                  <div class="neon-preview" id="neon-preview" style="background-color: rgb(${vehicleData.neonColor ? vehicleData.neonColor.join(',') : '255,0,255'})"></div>
                  <div class="rgb-sliders">
                      <div class="rgb-slider">
                          <span>R</span>
                          <input type="range" min="0" max="255" value="${vehicleData.neonColor ? vehicleData.neonColor[0] : 255}" id="neon-r-slider">
                          <span id="neon-r-value">${vehicleData.neonColor ? vehicleData.neonColor[0] : 255}</span>
                      </div>
                      <div class="rgb-slider">
                          <span>G</span>
                          <input type="range" min="0" max="255" value="${vehicleData.neonColor ? vehicleData.neonColor[1] : 0}" id="neon-g-slider">
                          <span id="neon-g-value">${vehicleData.neonColor ? vehicleData.neonColor[1] : 0}</span>
                      </div>
                      <div class="rgb-slider">
                          <span>B</span>
                          <input type="range" min="0" max="255" value="${vehicleData.neonColor ? vehicleData.neonColor[2] : 255}" id="neon-b-slider">
                          <span id="neon-b-value">${vehicleData.neonColor ? vehicleData.neonColor[2] : 255}</span>
                      </div>
                  </div>
                  <button class="apply-color-btn" id="apply-neon-custom">Appliquer</button>
              </div>
          </div>
      </div>
  `);
  
  // Variable pour suivre la couleur de néon sélectionnée
  window.selectedNeonRGB = vehicleData.neonColor ? [...vehicleData.neonColor] : [255, 0, 255];
  
  // Mettre à jour la couleur active des néons
  if (vehicleData.neonColor) {
      const r = vehicleData.neonColor[0];
      const g = vehicleData.neonColor[1];
      const b = vehicleData.neonColor[2];
      
      // Sélectionner la couleur prédéfinie si elle correspond
      $(`.neon-color`).each(function() {
          const rgb = $(this).data('rgb').split(',');
          if (parseInt(rgb[0]) === r && parseInt(rgb[1]) === g && parseInt(rgb[2]) === b) {
              $(this).addClass('active');
          }
      });
  }
  
  // Gestionnaires d'événements
  
  // Toggle principal des néons
  $("#neon-main-toggle").on("click", function() {
      const isActive = $(this).hasClass("active");
      if (isActive) {
          $(this).removeClass("active");
          applyModification("neons", 0);
          showNotification("Néons désactivés");
      } else {
          $(this).addClass("active");
          applyModification("neons", 1);
          showNotification("Néons activés");
      }
  });
  
  // Gestion des positions de néons
  $(".neon-positions .extra-toggle-btn").on("click", function() {
      const isActive = $(this).hasClass("active");
      const position = parseInt($(this).data("position"));
      
      if (isActive) {
          $(this).removeClass("active");
          applyModification("neonPosition", 0, position);
      } else {
          $(this).addClass("active");
          applyModification("neonPosition", 1, position);
          
          // Activer les néons si pas déjà actifs
          if (!$("#neon-main-toggle").hasClass("active")) {
              $("#neon-main-toggle").addClass("active");
              applyModification("neons", 1);
          }
      }
  });
  
  // Sélection des couleurs prédéfinies
  $(".neon-color").on("click", function() {
      $(".neon-color").removeClass("active selected");
      $(this).addClass("active selected");
      
      const rgb = $(this).data("rgb").split(',');
      window.selectedNeonRGB = [parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2])];
      
      // Appliquer immédiatement la couleur
      applyModification("neonColor", null, window.selectedNeonRGB);
      
      // Mettre à jour l'interface
      $("#neon-preview").css("background-color", `rgb(${window.selectedNeonRGB.join(',')})`);
      
      // Mettre à jour les sliders
      $("#neon-r-slider").val(window.selectedNeonRGB[0]);
      $("#neon-g-slider").val(window.selectedNeonRGB[1]);
      $("#neon-b-slider").val(window.selectedNeonRGB[2]);
      
      // Mettre à jour les valeurs affichées
      $("#neon-r-value").text(window.selectedNeonRGB[0]);
      $("#neon-g-value").text(window.selectedNeonRGB[1]);
      $("#neon-b-value").text(window.selectedNeonRGB[2]);
      
      // Activer les néons si pas déjà actifs
      if (!$("#neon-main-toggle").hasClass("active")) {
          $("#neon-main-toggle").addClass("active");
          applyModification("neons", 1);
      }
      
      // Notification
      const colorName = $(this).find("span").text();
      showNotification(`Couleur de néon: ${colorName}`);
  });
  
  // Mise à jour en direct des sliders RGB
  $("#neon-r-slider, #neon-g-slider, #neon-b-slider").on("input", function() {
      const r = parseInt($("#neon-r-slider").val());
      const g = parseInt($("#neon-g-slider").val());
      const b = parseInt($("#neon-b-slider").val());
      
      // Mettre à jour les valeurs et l'aperçu
      $("#neon-r-value").text(r);
      $("#neon-g-value").text(g);
      $("#neon-b-value").text(b);
      $("#neon-preview").css("background-color", `rgb(${r},${g},${b})`);
      
      // Stocker les valeurs actuelles
      window.selectedNeonRGB = [r, g, b];
      
      // Appliquer la couleur après un petit délai
      clearTimeout(window.neonColorTimeout);
      window.neonColorTimeout = setTimeout(() => {
          applyModification("neonColor", null, [r, g, b]);
          
          // Activer les néons si nécessaire
          if (!$("#neon-main-toggle").hasClass("active")) {
              $("#neon-main-toggle").addClass("active");
              applyModification("neons", 1);
          }
      }, 300);
  });

  // Appliquer la couleur personnalisée
  $("#apply-neon-custom").on("click", function() {
      // Appliquer la couleur
      applyModification("neonColor", null, window.selectedNeonRGB);
      
      // Désélectionner les couleurs prédéfinies et réinitialiser la sélection active
      $(".neon-color").removeClass("active selected");
      
      // Trouver si une couleur prédéfinie correspond
      $(`.neon-color`).each(function() {
          const rgb = $(this).data('rgb').split(',');
          if (parseInt(rgb[0]) === window.selectedNeonRGB[0] && 
              parseInt(rgb[1]) === window.selectedNeonRGB[1] && 
              parseInt(rgb[2]) === window.selectedNeonRGB[2]) {
              $(this).addClass('active');
          }
      });
      
      // Activer les néons si pas déjà actifs
      if (!$("#neon-main-toggle").hasClass("active")) {
          $("#neon-main-toggle").addClass("active");
          applyModification("neons", 1);
      }
      
      // Notification
      showNotification(`Couleur de néon RGB(${window.selectedNeonRGB.join(', ')}) appliquée`);
  });
}

// Fonction pour afficher une notification
function showNotification(message) {
  // Supprimer les anciennes notifications
  $(".notification").remove();
  
  // Créer la nouvelle notification
  const notification = $(`<div class="notification">${message}</div>`);
  $("body").append(notification);
  
  // Animation d'entrée
  notification.css({
      bottom: "-50px",
      opacity: 0
  }).animate({
      bottom: "20px",
      opacity: 1
  }, 300);
  
  // Animation de sortie après 2 secondes
  setTimeout(() => {
      notification.animate({
          bottom: "-50px",
          opacity: 0
      }, 300, function() {
          $(this).remove();
      });
  }, 2000);
}

// Fonction pour appliquer une modification au véhicule
function applyModification(category, level, extraData) {
  console.log(`Applying modification: ${category}, Level: ${level}, Extra: ${extraData}`);
  
  // Envoyer la modification au jeu
  $.post(
      "https://custom/applyModification",
      JSON.stringify({
          category: category,
          level: level,
          color: extraData,
          extraId: extraData
      }),
      function(response) {
          if (response && response.success === false) {
              console.error(`Erreur lors de l'application de la modification: ${category}`, response.error);
          }
      }
  ).fail(function(error) {
      console.error("Erreur de requête:", error);
  });
}



// Gestionnaire d'événements pour recevoir les messages du serveur


// Mise à jour du style CSS
const newCSS = `
/* Style pour le color-preview */
.color-preview {
  width: 100%;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
}

.color-preview:hover {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(40, 116, 166, 0.5);
  transform: scale(1.02);
}

.color-preview:active {
  transform: scale(0.98);
}

/* Style pour afficher un indicateur d'aide sur le preview */
.color-preview::after {
  content: 'Cliquer pour personnaliser';
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.color-preview:hover::after {
  opacity: 1;
}

/* Style pour la section-header avec bouton */
.color-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Styles pour le bouton d'expansion */
.color-expand-btn {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  transition: transform 0.2s ease;
}

.color-expand-btn:hover {
  transform: scale(1.2);
}

/* Animation pour le changement de couleur */
@keyframes color-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); box-shadow: 0 0 15px rgba(40, 116, 166, 0.7); }
  100% { transform: scale(1); }
}

.color-changed {
  animation: color-pulse 0.3s ease;
}
`;

$('head').append(`<style>${newCSS}</style>`); // À ajouter dans une fonction d'initialisation




  // Fonction pour trouver une couleur GTA par son ID
  function findGTAColorById(id) {
    const gtaColors = [
        // Noirs/gris
        { name: "Noir", color: "#0E0E0E", id: 0 },
        { name: "Graphite", color: "#1C1D21", id: 1 },
        { name: "Noir acier", color: "#32383D", id: 2 },
        { name: "Gris foncé", color: "#454B4F", id: 3 },
        { name: "Gris", color: "#666970", id: 4 },
        { name: "Gris clair", color: "#969995", id: 5 },
        { name: "Argent", color: "#C5C5C5", id: 6 },
        { name: "Gris argent", color: "#979A97", id: 7 },
        { name: "Rouille rouge", color: "#637380", id: 8 },
        { name: "Gris acier", color: "#63625C", id: 9 },
        { name: "Gris météorite", color: "#3A3C3F", id: 10 },
        { name: "Noir gravier", color: "#27292B", id: 11 },
        { name: "Aluminium", color: "#73848C", id: 12 },
        { name: "Chrome brossé", color: "#96928E", id: 13 },
        { name: "Gris acier foncé", color: "#515459", id: 14 },
        { name: "Gris anthracite", color: "#373C43", id: 15 },
        { name: "Noir absolu", color: "#0E0F11", id: 16 },
        { name: "Noir charbon", color: "#121315", id: 17 },
        { name: "Gris satiné", color: "#8598A5", id: 18 },
        { name: "Noir satiné", color: "#0D131B", id: 19 },
        { name: "Noir ultime", color: "#050506", id: 20 },
        { name: "Noir quartz", color: "#15181C", id: 21 },
        { name: "Noir uni", color: "#0F0F0F", id: 22 },
        
        // Blancs
        { name: "Blanc nacré", color: "#F1F1F1", id: 106 },
        { name: "Blanc", color: "#FFFFFF", id: 111 },
        { name: "Blanc glacier", color: "#F5F5F5", id: 112 },
        { name: "Crème", color: "#FFF5D0", id: 113 },
        { name: "Blanc givré", color: "#EAEAEA", id: 114 },
        { name: "Blanc osmium", color: "#DDD5D0", id: 116 },
        { name: "Blanc polaire", color: "#F7F7F7", id: 118 },
        { name: "Blanc cassé", color: "#EAE6DE", id: 121 },
        { name: "Ivoire", color: "#F0E5D0", id: 122 },
        
        // Rouges
        { name: "Rouge", color: "#B0090F", id: 27 },
        { name: "Rouge vif", color: "#D10A17", id: 28 },
        { name: "Rouge grenat", color: "#93002B", id: 29 },
        { name: "Rouge flamme", color: "#DE0F18", id: 30 },
        { name: "Rouge gracieux", color: "#8A292C", id: 31 },
        { name: "Rouge vin", color: "#5E1E25", id: 32 },
        { name: "Rouge cabernet", color: "#620C1C", id: 33 },
        { name: "Rouge bonbon", color: "#D10056", id: 34 },
        { name: "Rouge pomme", color: "#B8091A", id: 35 },
        { name: "Rouge écarlate", color: "#E6133C", id: 141 },
        { name: "Rouge rubis", color: "#8C1D24", id: 142 },
        { name: "Rouge vermillon", color: "#942126", id: 144 },
        { name: "Rouge corail", color: "#C72133", id: 150 },
        { name: "Rouge opéra", color: "#6E0E21", id: 155 },
        
        // Roses
        { name: "Rose", color: "#F2C4E4", id: 135 },
        { name: "Rose chaud", color: "#D5007A", id: 35 },
        { name: "Rose fuschia", color: "#B01259", id: 137 },
        { name: "Rose saumon", color: "#F69697", id: 136 },
        { name: "Rose pfister", color: "#BE2F8A", id: 138 },
        
        // Oranges
        { name: "Orange", color: "#F78616", id: 38 },
        { name: "Orange vif", color: "#E56310", id: 41 },
        { name: "Orange soleil", color: "#F0835C", id: 44 },
        { name: "Orange citrus", color: "#FFC35C", id: 43 },
        { name: "Orange crème", color: "#FDAA75", id: 130 },
        { name: "Orange métallisé", color: "#D16018", id: 131 },
        { name: "Orange automne", color: "#BE5B33", id: 153 },
        
        // Bruns
        { name: "Or", color: "#A77B48", id: 37 },
        { name: "Bronze", color: "#594E33", id: 90 },
        { name: "Cuivre orangé", color: "#A25A16", id: 36 },
        { name: "Cuivre", color: "#8E633A", id: 154 },
        { name: "Brun", color: "#3D311E", id: 96 },
        { name: "Brun moyen", color: "#5A3921", id: 97 },
        { name: "Brun clair", color: "#6D4C32", id: 98 },
        { name: "Ocre", color: "#BD9462", id: 99 },
        { name: "Kaki", color: "#7D6256", id: 100 },
        { name: "Beige", color: "#D9C6B0", id: 95 },
        { name: "Brun chocolat", color: "#372119", id: 101 },
        { name: "Brun terre", color: "#4E352B", id: 102 },
        { name: "Brun feuille", color: "#51463D", id: 103 },
        { name: "Brun marais", color: "#3C322A", id: 127 },
        
        // Jaunes
        { name: "Jaune", color: "#FFC91F", id: 42 },
        { name: "Jaune course", color: "#DED835", id: 89 },
        { name: "Jaune canari", color: "#FFEB2F", id: 88 },
        { name: "Jaune crème", color: "#F0E565", id: 89 },
        { name: "Jaune citron", color: "#B5AF3A", id: 91 },
        { name: "Jaune bronzé", color: "#B7A55F", id: 122 },
        
        // Verts
        { name: "Vert foncé", color: "#132428", id: 52 },
        { name: "Vert forêt", color: "#1F2E2C", id: 53 },
        { name: "Vert olive", color: "#4E6443", id: 54 },
        { name: "Vert vif", color: "#66B81F", id: 55 },
        { name: "Vert gazon", color: "#129500", id: 56 },
        { name: "Vert lime", color: "#7EC000", id: 92 },
        { name: "Vert menthe", color: "#A3E064", id: 94 },
        { name: "Vert sapin", color: "#1D261C", id: 49 },
        { name: "Vert Mossport", color: "#1E302D", id: 50 },
        { name: "Vert chasseur", color: "#2F353A", id: 51 },
        { name: "Vert émeraude", color: "#23442F", id: 52 },
        { name: "Vert pomme", color: "#91CA34", id: 57 },
        { name: "Vert bouteille", color: "#122731", id: 58 },
        { name: "Vert mousse", color: "#5F7168", id: 59 },
        { name: "Vert citron", color: "#A9C758", id: 93 },
        { name: "Vert prairie", color: "#356640", id: 151 },
        { name: "Vert pin", color: "#1E442A", id: 156 },
        
        // Bleus
        { name: "Bleu nuit", color: "#0B1421", id: 64 },
        { name: "Bleu galaxie", color: "#111E25", id: 65 },
        { name: "Bleu foncé", color: "#1E2130", id: 66 },
        { name: "Bleu marine", color: "#1D2144", id: 67 },
        { name: "Bleu diamant", color: "#2F3554", id: 68 },
        { name: "Bleu surf", color: "#3B4E78", id: 69 },
        { name: "Bleu nautique", color: "#0A1D2B", id: 70 },
        { name: "Bleu vif", color: "#1157BD", id: 73 },
        { name: "Bleu ciel", color: "#57A2CE", id: 74 },
        { name: "Bleu paradis", color: "#7AAFDE", id: 75 },
        { name: "Bleu crème", color: "#B8E3F7", id: 84 },
        { name: "Acier bleuté", color: "#304C5F", id: 85 },
        { name: "Bleu minuit", color: "#2C3242", id: 71 },
        { name: "Bleu sombre", color: "#212A3F", id: 72 },
        { name: "Bleu roi", color: "#0E316D", id: 80 },
        { name: "Bleu éclatant", color: "#001E81", id: 81 },
        { name: "Bleu saphir", color: "#0F1E73", id: 82 },
        { name: "Bleu azur", color: "#253C83", id: 83 },
        { name: "Bleu-vert", color: "#506272", id: 104 },
        { name: "Bleu quartz", color: "#455B66", id: 105 },
        { name: "Bleu horizon", color: "#5E748F", id: 107 },
        { name: "Turquoise", color: "#1B9E77", id: 128 },
        { name: "Bleu épinette", color: "#112539", id: 140 },
        { name: "Bleu epsilon", color: "#3761AC", id: 146 },
        { name: "Bleu Schafter", color: "#0D2042", id: 147 },
        { name: "Bleu acier", color: "#0D3045", id: 152 },
        { name: "Bleu cobalt", color: "#192C4A", id: 157 },
        
        // Violets
        { name: "Violet", color: "#361E77", id: 145 },
        { name: "Violet graphite", color: "#1E1D22", id: 76 },
        { name: "Violet nuit", color: "#1E1D2C", id: 77 },
        { name: "Violet laevendel", color: "#473342", id: 78 },
        { name: "Violet foncé", color: "#261B2B", id: 79 },
        { name: "Violet pâle", color: "#5E4773", id: 143 },
        { name: "Violet améthyste", color: "#612F79", id: 148 },
        { name: "Violet sombre", color: "#242131", id: 146 },
        { name: "Schafter violet", color: "#2F2F48", id: 81 },
        { name: "Violet bourgogne", color: "#3F3655", id: 149 },
        
        // Métalliques spéciaux
        { name: "Chrome", color: "#DBDBDB", id: 120 }
      ];
    
    return gtaColors.find(color => color.id === id) || { name: "Couleur inconnue", color: "#FF0000", id: id };
  }
  
  // Fonction pour mettre à jour le canvas avec une nouvelle teinte
  function updateCanvasWithHue(type, hue) {
    const canvas = $(`#${type}-color-gradient canvas`)[0];
    const ctx = canvas.getContext('2d');
    
    // Convertir la teinte en couleur RGB
    const hueColor = hsbToRgb(hue, 100, 100);
    
    // Créer le dégradé de base avec la nouvelle teinte
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
    gradient.addColorStop(1, `rgba(${hueColor[0]}, ${hueColor[1]}, ${hueColor[2]}, 1)`);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Recréer le dégradé de luminosité
    const brightnessGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    brightnessGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    brightnessGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.fillStyle = brightnessGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  // Fonction pour mettre à jour les entrées RGB avec une couleur
  function updateRGBInputs(type, r, g, b) {
    // Mettre à jour les sliders
    $(`#${type}-r-slider`).val(r);
    $(`#${type}-g-slider`).val(g);
    $(`#${type}-b-slider`).val(b);
    
    // Mettre à jour les valeurs affichées
    $(`#${type}-r-value`).text(r);
    $(`#${type}-g-value`).text(g);
    $(`#${type}-b-value`).text(b);
    
    // Mettre à jour l'entrée hex
    const hex = rgbToHex(r, g, b);
    $(`#${type}-hex-value`).val(hex);
    
    // Convertir en HSB
    const hsb = rgbToHsb(r, g, b);
    $(`#${type}-h-value`).val(hsb[0]);
    $(`#${type}-s-value`).val(hsb[1]);
    $(`#${type}-b-value`).val(hsb[2]);
  }
  
  // Fonction pour configurer les événements des sliders et entrées
  function setupColorPickers() {
    ["primary", "secondary"].forEach(type => {
      // Mettre à jour les valeurs quand les sliders RGB changent
      $(`#${type}-r-slider, #${type}-g-slider, #${type}-b-slider`).on('input', function() {
        const r = parseInt($(`#${type}-r-slider`).val());
        const g = parseInt($(`#${type}-g-slider`).val());
        const b = parseInt($(`#${type}-b-slider`).val());
        
        $(`#${type}-r-value`).text(r);
        $(`#${type}-g-value`).text(g);
        $(`#${type}-b-value`).text(b);
        
        // Mettre à jour hex
        const hex = rgbToHex(r, g, b);
        $(`#${type}-hex-value`).val(hex);
        
        // Convertir en HSB et mettre à jour
        const hsb = rgbToHsb(r, g, b);
        $(`#${type}-h-value`).val(hsb[0]);
        $(`#${type}-s-value`).val(hsb[1]);
        $(`#${type}-b-value`).val(hsb[2]);
      });
      
      // Mettre à jour quand les valeurs HSB changent
      $(`#${type}-h-value, #${type}-s-value, #${type}-b-value`).on('input', function() {
        const h = parseInt($(`#${type}-h-value`).val() || 0);
        const s = parseInt($(`#${type}-s-value`).val() || 0);
        const b = parseInt($(`#${type}-b-value`).val() || 0);
        
        // Convertir en RGB
        const rgb = hsbToRgb(h, s, b);
        
        // Mettre à jour sliders RGB
        $(`#${type}-r-slider`).val(rgb[0]);
        $(`#${type}-g-slider`).val(rgb[1]);
        $(`#${type}-b-slider`).val(rgb[2]);
        
        // Mettre à jour valeurs
        $(`#${type}-r-value`).text(rgb[0]);
        $(`#${type}-g-value`).text(rgb[1]);
        $(`#${type}-b-value`).text(rgb[2]);
        
        // Mettre à jour hex
        const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
        $(`#${type}-hex-value`).val(hex);
        
        // Mettre à jour slider de teinte
        $(`#${type}-hue-slider`).val(h);
        updateCanvasWithHue(type, h);
      });
      
      // Mettre à jour quand hex change
      $(`#${type}-hex-value`).on('input', function() {
        const hex = $(this).val();
        if (/^#[0-9A-F]{6}$/i.test(hex)) {
          const rgb = hexToRgb(hex);
          
          // Mettre à jour RGB
          $(`#${type}-r-slider`).val(rgb[0]);
          $(`#${type}-g-slider`).val(rgb[1]);
          $(`#${type}-b-slider`).val(rgb[2]);
          
          $(`#${type}-r-value`).text(rgb[0]);
          $(`#${type}-g-value`).text(rgb[1]);
          $(`#${type}-b-value`).text(rgb[2]);
          
          // Convertir en HSB
          const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
          $(`#${type}-h-value`).val(hsb[0]);
          $(`#${type}-s-value`).val(hsb[1]);
          $(`#${type}-b-value`).val(hsb[2]);
          
          // Mettre à jour slider de teinte
          $(`#${type}-hue-slider`).val(hsb[0]);
          updateCanvasWithHue(type, hsb[0]);
        }
      });
    });
  }
  


  
  // Conversion RGB vers Hex
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

  // Conversion Hex vers RGB
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    
    return [r, g, b];
}


  // Conversion HSB vers RGB
  function hsbToRgb(h, s, b) {
    s = s / 100;
    b = b / 100;
    
    let r, g, bl;
    
    if (s === 0) {
      r = g = bl = b;
    } else {
      const i = Math.floor(h / 60) % 6;
      const f = h / 60 - i;
      const p = b * (1 - s);
      const q = b * (1 - s * f);
      const t = b * (1 - s * (1 - f));
      
      switch (i) {
        case 0: r = b; g = t; bl = p; break;
        case 1: r = q; g = b; bl = p; break;
        case 2: r = p; g = b; bl = t; break;
        case 3: r = p; g = q; bl = b; break;
        case 4: r = t; g = p; bl = b; break;
        case 5: r = b; g = p; bl = q; break;
      }
    }
    
    return [
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(bl * 255)
    ];
  }
  
  // Conversion RGB vers HSB
  function rgbToHsb(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    
    let h, s;
    const v = max;
    
    if (delta === 0) {
      h = 0;
      s = 0;
    } else {
      s = delta / max;
      
      if (max === r) {
        h = ((g - b) / delta) % 6;
      } else if (max === g) {
        h = (b - r) / delta + 2;
      } else {
        h = (r - g) / delta + 4;
      }
      
      h *= 60;
      if (h < 0) h += 360;
    }
    
    return [
      Math.round(h),
      Math.round(s * 100),
      Math.round(v * 100)
    ];
  }
  
  
  function generateWheelsUI() {
    $('#wheels-container').empty();
    
    // Ajouter un titre
    $('#wheels-container').append(`<div class="section-title">Customisation roues</div>`);
    
    // Type de roues
    
    const wheelTypeItem = `
        <div class="mod-item" data-category="wheelType">
            <div class="mod-item-title">Type de roues</div>
            <div class="mod-item-level" id="wheelType-level">Sport</div>
            <div class="selection">
                <div class="ligne"></div>
                <div class="rond" id="wheelType-slider"></div>
                <div class="fleches" id="wheelType-right">
                    <div class="fleche"></div>
                    <div class="fleche-2"></div>
                </div>
                <div class="fleches-2" id="wheelType-left">
                    <div class="fleche"></div>
                    <div class="fleche-2"></div>
                </div>
            </div>
        </div>
    `;
    
    $('#wheels-container').append(wheelTypeItem);
    
    // S'assurer que wheelCategories.wheelType.types est défini et non vide
    if (wheelCategories.wheelType && wheelCategories.wheelType.types && wheelCategories.wheelType.types.length > 0) {
        // Initialiser le slider pour le type de roue
        let currentType = wheelCategories.wheelType.types.findIndex(type => type.active);
        if (currentType !== -1) {
            const lineWidth = 260;
            const position = (currentType / (wheelCategories.wheelType.types.length - 1)) * lineWidth;
            $(`#wheelType-slider`).css('left', 45 + position);
            $('#wheelType-level').text(wheelCategories.wheelType.types[currentType].name);
        } else {
            $(`#wheelType-slider`).css('left', '45px');
            $('#wheelType-level').text("Sport");
        }
        
        // Gestionnaires d'événements
        $(`#wheelType-left`).click(() => changeWheelType(-1));
        $(`#wheelType-right`).click(() => changeWheelType(1));
    }
    
    // Modèle de roues avant
    $('#wheels-container').append(`<div class="mod-item-title2">Modèle de roues</div>`);
    
    // Vérifier si les options de roues avant sont disponibles
    if (wheelCategories.frontWheel) {
        const wheelModelItem = `
            <div class="mod-item" data-category="frontWheel">
                <div class="mod-item-title">Roues avant</div>
                <div class="mod-item-level" id="frontWheel-level">${wheelCategories.frontWheel.current > 0 ? "Niveau " + wheelCategories.frontWheel.current : "Aucun"}</div>
                <div class="selection">
                    <div class="ligne"></div>
                    <div class="rond" id="frontWheel-slider"></div>
                    <div class="fleches" id="frontWheel-right">
                        <div class="fleche"></div>
                        <div class="fleche-2"></div>
                    </div>
                    <div class="fleches-2" id="frontWheel-left">
                        <div class="fleche"></div>
                        <div class="fleche-2"></div>
                    </div>
                </div>
            </div>
        `;
        
        $('#wheels-container').append(wheelModelItem);
        
        // Initialiser le slider pour le modèle de roue avant
        const lineWidth = 260;
        const position = wheelCategories.frontWheel.maxLevel > 0 
            ? (wheelCategories.frontWheel.current / wheelCategories.frontWheel.maxLevel) * lineWidth 
            : 0;
        $(`#frontWheel-slider`).css('left', 45 + position);
        
        // Gestionnaires d'événements
        $(`#frontWheel-left`).click(() => changeModLevel('frontWheel', -1));
        $(`#frontWheel-right`).click(() => changeModLevel('frontWheel', 1));
    }
    
    // Modèle de roues arrière (seulement pour les motos)
    if (wheelCategories.backWheel && wheelCategories.backWheel.maxLevel > 0) {
        const rearWheelItem = `
            <div class="mod-item" data-category="backWheel">
                <div class="mod-item-title">Roues arrière</div>
                <div class="mod-item-level" id="backWheel-level">${wheelCategories.backWheel.current > 0 ? "Niveau " + wheelCategories.backWheel.current : "Aucun"}</div>
                <div class="selection">
                    <div class="ligne"></div>
                    <div class="rond" id="backWheel-slider"></div>
                    <div class="fleches" id="backWheel-right">
                        <div class="fleche"></div>
                        <div class="fleche-2"></div>
                    </div>
                    <div class="fleches-2" id="backWheel-left">
                        <div class="fleche"></div>
                        <div class="fleche-2"></div>
                    </div>
                </div>
            </div>
        `;
        
        $('#wheels-container').append(rearWheelItem);
        
        // Initialiser le slider pour le modèle de roue arrière
        const lineWidth = 260;
        const position = (wheelCategories.backWheel.current / wheelCategories.backWheel.maxLevel) * lineWidth;
        $(`#backWheel-slider`).css('left', 45 + position);
        
        // Gestionnaires d'événements
        $(`#backWheel-left`).click(() => changeModLevel('backWheel', -1));
        $(`#backWheel-right`).click(() => changeModLevel('backWheel', 1));
    }
    
    // Couleur des jantes
    $('#wheels-container').append(`<div class="mod-item-title2">Couleur des jantes</div>`);
    const colorGrid = $('<div class="color-grid"></div>');
    const gtaColors = [
        // Métalliques populaires pour jantes
        { name: "Chrome", color: "#DBDBDB", id: 120 },
        { name: "Aluminium", color: "#73848C", id: 12 },
        { name: "Chrome brossé", color: "#96928E", id: 13 },
        { name: "Argent", color: "#C5C5C5", id: 6 },
        
        // Noirs/gris - couleurs de jantes communes
        { name: "Noir", color: "#0E0E0E", id: 0 },
        { name: "Graphite", color: "#1C1D21", id: 1 },
        { name: "Noir acier", color: "#32383D", id: 2 },
        { name: "Gris foncé", color: "#454B4F", id: 3 },
        { name: "Gris", color: "#666970", id: 4 },
        { name: "Gris clair", color: "#969995", id: 5 },
        { name: "Noir gravier", color: "#27292B", id: 11 },
        
        // Blancs
        { name: "Blanc", color: "#FFFFFF", id: 111 },
        { name: "Blanc glacier", color: "#F5F5F5", id: 112 },
        
        // Or et métalliques
        { name: "Or", color: "#A77B48", id: 37 },
        { name: "Bronze", color: "#594E33", id: 90 },
        
        // Couleurs vives
        { name: "Rouge", color: "#B0090F", id: 27 },
        { name: "Bleu roi", color: "#0E316D", id: 80 },
        { name: "Bleu vif", color: "#1157BD", id: 73 },
        { name: "Rouge vif", color: "#D10A17", id: 28 },
        { name: "Jaune", color: "#FFC91F", id: 42 },
        { name: "Vert vif", color: "#66B81F", id: 55 },
        { name: "Orange vif", color: "#E56310", id: 41 },
        { name: "Rose", color: "#F2C4E4", id: 135 },
        { name: "Violet", color: "#361E77", id: 145 }
    ];
        
    // Utiliser les couleurs définies
    for (let i = 0; i < gtaColors.length; i++) {
        const colorItem = $(`<div class="color-item" style="background-color: ${gtaColors[i].color}" data-color="${gtaColors[i].id}" data-type="wheelColor" title="${gtaColors[i].name}"></div>`);
        if (gtaColors[i].id === vehicleData.wheelColor) {
            colorItem.addClass('active');
        }
        colorItem.click(() => {
            $('.color-item[data-type="wheelColor"]').removeClass('active');
            colorItem.addClass('active');
            applyModification('wheelColor', gtaColors[i].id);
        });
        colorGrid.append(colorItem);
    }
    
    $('#wheels-container').append(colorGrid);
    
    // Fumée des pneus
    $('#wheels-container').append(`<div class="mod-item-title2">Fumée des pneus</div>`);
    
    const smokeToggle = `
        <div class="extra-toggle">
            <div class="extra-toggle-btn ${vehicleData.smokeEnabled ? 'active' : ''}" id="smoke-toggle"></div>
            <div class="extra-toggle-label">Activer la fumée</div>
        </div>
    `;
    
    $('#wheels-container').append(smokeToggle);
    
    // Couleur de fumée
    $('#wheels-container').append(`<div class="mod-item-title2">Couleur de fumée</div>`);
    
    let smokeColorGrid = $('<div class="color-grid"></div>');
    
    const smokeColors = [
        { name: "Blanc", color: "rgb(255, 255, 255)" },
        { name: "Rouge", color: "rgb(244, 65, 65)" },
        { name: "Orange", color: "rgb(244, 167, 66)" },
        { name: "Jaune", color: "rgb(244, 217, 65)" },
        { name: "Vert clair", color: "rgb(158, 255, 84)" },
        { name: "Vert foncé", color: "rgb(44, 94, 5)" },
        { name: "Bleu clair", color: "rgb(65, 211, 244)" },
        { name: "Bleu foncé", color: "rgb(24, 54, 163)" },
        { name: "Violet", color: "rgb(108, 24, 192)" },
        { name: "Rose", color: "rgb(192, 24, 172)" },
        { name: "Noir", color: "rgb(1, 1, 1)" }
    ];
    
    for (let i = 0; i < smokeColors.length; i++) {
        const colorItem = $(`<div class="color-item" style="background-color: ${smokeColors[i].color}" data-color="${i + 1}" data-type="smoke" title="${smokeColors[i].name}"></div>`);
        colorItem.click(() => {
            $('.color-item[data-type="smoke"]').removeClass('active');
            colorItem.addClass('active');
            applyModification('smokeColor', null, i + 1);
            currentSmokeColor = i + 1;
        });
        smokeColorGrid.append(colorItem);
    }
    
    $('#wheels-container').append(smokeColorGrid);
    
    // Gestionnaire pour le toggle de fumée
    $('#smoke-toggle').click(() => {
        const isActive = $('#smoke-toggle').hasClass('active');
        if (isActive) {
            $('#smoke-toggle').removeClass('active');
            applyModification('smoke', 0);
        } else {
            $('#smoke-toggle').addClass('active');
            applyModification("smoke", 1);
            // Appliquer la couleur actuellement sélectionnée
            applyModification('smokeColor', null, currentSmokeColor);
          }
      });
      
      // Initialiser les sliders glissables
      makeSlidersDraggable();
  }
  



  // Fonction pour générer dynamiquement les éléments de l'interface pour les extras
  function generateExtrasUI() {
    $("#extras-container").empty();
  
    // Ajouter un titre
    $("#extras-container").append(`<div class="section-title">Extras</div>`);
  
    // Si aucun extra n'est disponible
    const extras = vehicleData.extras || {};
    if (Object.keys(extras).length === 0) {
      $("#extras-container").append(
        `<div class="mod-item-title2" style="margin: 20px 0; text-align: center;">Aucun extra disponible pour ce véhicule</div>`
      );
      return;
    }
  
    // Générer un toggle pour chaque extra
    for (const extraId in extras) {
      const isEnabled = extras[extraId];
  
      const extraToggle = `
        <div class="extra-toggle" data-extra="${extraId}">
            <div class="extra-toggle-btn ${
              isEnabled ? "active" : ""
            }" id="extra-toggle-${extraId}"></div>
            <div class="extra-toggle-label">Extra ${extraId}</div>
        </div>
      `;
  
      $("#extras-container").append(extraToggle);
  
      // Gestionnaire d'événement
      $(`#extra-toggle-${extraId}`).click(() => {
        const isActive = $(`#extra-toggle-${extraId}`).hasClass("active");
        if (isActive) {
          $(`#extra-toggle-${extraId}`).removeClass("active");
          applyModification("extra", 0, extraId);
        } else {
          $(`#extra-toggle-${extraId}`).addClass("active");
          applyModification("extra", 1, extraId);
        }
      });
    }
  }

  function updateColorValueDisplays(type, colorId) {
    // Trouve la couleur GTA correspondant à l'ID
    const colorObj = findGTAColorById(colorId);
    if (!colorObj) return;
    
    // Obtient les valeurs RGB à partir de la couleur hex
    const rgb = hexToRgb(colorObj.color);
    if (!rgb) return;
    
    // Met à jour les sliders et les valeurs affichées si elles existent
    if ($(`#${type}-r-slider`).length) {
      $(`#${type}-r-slider`).val(rgb[0]);
      $(`#${type}-g-slider`).val(rgb[1]);
      $(`#${type}-b-slider`).val(rgb[2]);
      
      $(`#${type}-r-value`).text(rgb[0]);
      $(`#${type}-g-value`).text(rgb[1]);
      $(`#${type}-b-value`).text(rgb[2]);
      
      const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
      $(`#${type}-hex-value`).val(hex);
      
      const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
      $(`#${type}-h-value`).val(hsb[0]);
      $(`#${type}-s-value`).val(hsb[1]);
      $(`#${type}-b-value`).val(hsb[2]);
      
      // Met à jour l'aperçu de couleur
      $(`#${type}-preview`).css('background-color', colorObj.color);
    }
  }
  
  
  // Fonction pour générer dynamiquement les éléments de l'interface pour les portes
  function generateDoorsUI() {
    $("#doors-container").empty();
  
    // Ajouter un titre
    $("#doors-container").append(`<div class="section-title">Portes</div>`);
  
    // Tableau des portes disponibles
    const doors = [
      { id: 0, name: "Porte conducteur" },
      { id: 1, name: "Porte passager" },
      { id: 2, name: "Porte arrière gauche" },
      { id: 3, name: "Porte arrière droite" },
      { id: 4, name: "Capot" },
      { id: 5, name: "Coffre" },
    ];
  
    // Générer un toggle pour chaque porte
    for (const door of doors) {
      const doorToggle = `
        <div class="extra-toggle" data-door="${door.id}">
            <div class="extra-toggle-btn" id="door-toggle-${door.id}"></div>
            <div class="extra-toggle-label">${door.name}</div>
        </div>
      `;
  
      $("#doors-container").append(doorToggle);
  
      // Gestionnaire d'événement
      $(`#door-toggle-${door.id}`).click(() => {
        const isActive = $(`#door-toggle-${door.id}`).hasClass("active");
        if (isActive) {
          $(`#door-toggle-${door.id}`).removeClass("active");
          // Envoyer l'ordre de fermer la porte
          $.post(
            "https://custom/toggleDoor",
            JSON.stringify({
              doorId: door.id,
              open: false,
            })
          );
        } else {
          $(`#door-toggle-${door.id}`).addClass("active");
          // Envoyer l'ordre d'ouvrir la porte
          $.post(
            "https://custom/toggleDoor",
            JSON.stringify({
              doorId: door.id,
              open: true,
            })
          );
        }
      });
    }
  }
  
  // Fonction pour changer le niveau de modification
  function changeModLevel(category, change) {
    let data;
  
    // Déterminer la catégorie et récupérer les données
    if (category === "engine" || category === "brakes" || category === "transmission" || category === "suspension" || category === "armor") {
        data = performanceCategories[category];
    } else if (exteriorCategories[category]) {
        data = exteriorCategories[category];
    } else if (interiorCategories[category]) {
        data = interiorCategories[category];
    } else if (category === "frontWheel" || category === "backWheel") {
        data = wheelCategories[category];
    }
  
    if (!data) {
        console.error(`No data found for category: ${category}`);
        return;
    }
  
    let currentLevel = data.current || 0;
    let maxLevel = data.maxLevel || 0;
  
    let newLevel = currentLevel + change;
  
    // Vérifier les limites
    if (newLevel < 0) newLevel = 0;
    if (newLevel > maxLevel) newLevel = maxLevel;
  
    // Mettre à jour si changement
    if (newLevel !== currentLevel) {
        // Mettre à jour la donnée locale
        data.current = newLevel;
  
        // Mettre à jour l'interface
        updateModUI(category, newLevel);
  
        // Appliquer la modification au véhicule via NUI
        applyModification(category, newLevel);
    }
  }
  
  // Fonction pour changer la teinture des vitres
  function changeWindowTint(change) {
    let currentTint = windowTints.findIndex((tint) => tint.active);
    if (currentTint === -1) currentTint = 0;
  
    let newTint = currentTint + change;
  
    // Vérifier les limites
    if (newTint < 0) newTint = 0;
    if (newTint >= windowTints.length) newTint = windowTints.length - 1;
  
    // Mettre à jour si changement
    if (newTint !== currentTint) {
      // Désactiver l'ancien tint
      if (currentTint >= 0 && currentTint < windowTints.length) {
        windowTints[currentTint].active = false;
      }
  
      // Activer le nouveau tint
      windowTints[newTint].active = true;
  
      // Mettre à jour l'interface
      $("#windowTint-level").text(windowTints[newTint].name);
  
      // Calculer la position du slider
      const lineWidth = 260;
      const position = (newTint / (windowTints.length - 1)) * lineWidth;
      $("#windowTint-slider").css("left", 45 + position);
  
      // Appliquer la modification au véhicule via NUI
      applyModification("windowTint", windowTints[newTint].id);
    }
  }
  
  // Fonction pour changer le type de roues
  function changeWheelType(change) {
    const types = wheelCategories.wheelType.types;
    let currentType = types.findIndex((type) => type.active);
    if (currentType === -1) currentType = 0;
  
    let newType = currentType + change;
  
    // Vérifier les limites
    if (newType < 0) newType = 0;
    if (newType >= types.length) newType = types.length - 1;
  
    // Mettre à jour si changement
    if (newType !== currentType) {
      // Désactiver l'ancien type
      if (currentType >= 0 && currentType < types.length) {
        types[currentType].active = false;
      }
  
      // Activer le nouveau type
      types[newType].active = true;
  
      // Mettre à jour l'interface
      $("#wheelType-level").text(types[newType].name);
  
      // Calculer la position du slider
      const lineWidth = 260;
      const position = (newType / (types.length - 1)) * lineWidth;
      $("#wheelType-slider").css("left", 45 + position);
  
      // Appliquer la modification au véhicule via NUI
      applyModification("wheelType", types[newType].id);
    }
  }
  
  
  // Fonction pour appliquer automatiquement les couleurs à chaque changement

  function setupAutoColorApplication() {
    // Pour les couleurs primaires
    $(".color-item[data-type='primary']").on("click", function() {
      $(".color-item[data-type='primary']").removeClass("active selected");
      $(this).addClass("active selected");
      const selectedColor = parseInt($(this).data("color"));
      applyModification("primaryColor", selectedColor);
      
      // Animation et notification
      const colorName = $(this).attr("title");
      showNotification(`Couleur primaire: ${colorName || "Couleur"}`);
    });
    
    // Pour les couleurs secondaires
    $(".color-item[data-type='secondary']").on("click", function() {
      $(".color-item[data-type='secondary']").removeClass("active selected");
      $(this).addClass("active selected");
      const selectedColor = parseInt($(this).data("color"));
      applyModification("secondaryColor", selectedColor);
      
      // Animation et notification
      const colorName = $(this).attr("title");
      showNotification(`Couleur secondaire: ${colorName || "Couleur"}`);
    });
    
    // Pour les couleurs nacrées
    $(".color-item[data-type='pearl']").on("click", function() {
      $(".color-item[data-type='pearl']").removeClass("active selected");
      $(this).addClass("active selected");
      const selectedColor = parseInt($(this).data("color"));
      applyModification("pearlColor", selectedColor);
      
      // Animation et notification
      const colorName = $(this).attr("title");
      showNotification(`Couleur nacrée: ${colorName || "Couleur"}`);
    });
    
    // Pour les couleurs de xenon
    $(".xenon-color").on("click", function() {
      $(".xenon-color").removeClass("active selected");
      $(this).addClass("active selected");
      const colorId = parseInt($(this).data("color"));
      applyModification("xenonColor", colorId);
      
      // Activer les xenons si pas déjà actifs
      if (!$("#xenon-main-toggle").hasClass("active")) {
        $("#xenon-main-toggle").addClass("active");
        applyModification("xenon", 1);
      }
      
      // Animation et notification
      const colorName = $(this).find("span").text();
      showNotification(`Couleur de xenon: ${colorName}`);
    });
    
    // Pour les teintes de vitres
    $(".tint-option").on("click", function() {
      $(".tint-option").removeClass("active selected");
      $(this).addClass("active selected");
      const tintId = parseInt($(this).data("tint-id"));
      applyModification("windowTint", tintId);
      
      // Animation et notification
      const tintName = $(this).find(".tint-name").text();
      showNotification(`Teinte des vitres: ${tintName}`);
    });
    
    // Pour le sélecteur de couleur RVB
    setLiveColorPreview("primary");
    setLiveColorPreview("secondary");
  }

  
  // Fonction pour mettre à jour l'interface d'un mod
  function updateModUI(category, level) {
    // Mettre à jour le texte du niveau
    $(`#${category}-level`).text(level === 0 ? "Aucun" : "Niveau " + level);
  
    // Déterminer le niveau max
    let maxLevel = 1;
    let data;
  
    if (category === "engine" || category === "brakes" || category === "transmission" || category === "suspension" || category === "armor") {
        data = performanceCategories[category];
    } else if (exteriorCategories[category]) {
        data = exteriorCategories[category];
    } else if (interiorCategories[category]) {
        data = interiorCategories[category];
    } else if (category === "frontWheel" || category === "backWheel") {
        data = wheelCategories[category];
    }
  
    if (data) {
        maxLevel = data.maxLevel || 1;
    }
  
    // Calculer la position du slider
    const lineWidth = 260;
    const position = maxLevel > 0 ? (level / maxLevel) * lineWidth : 0;
    
    $(`#${category}-slider`).css("left", 45 + position);
  }
  
  
  // Boutons de rotation du véhicule
  $("#rotate-left").click(() => {
    $.post(
      "https://custom/rotate",
      JSON.stringify({
        direction: "left",
      })
    );
  });
  
  $("#rotate-right").click(() => {
    $.post(
      "https://custom/rotate",
      JSON.stringify({
        direction: "right",
      })
    );
  });
  
  // Gestion des touches du clavier pour la rotation
  $(document).keydown(function (e) {
    if (e.key === "ArrowLeft") {
      $.post(
        "https://custom/rotate",
        JSON.stringify({
          direction: "left",
        })
      );
    } else if (e.key === "ArrowRight") {
      $.post(
        "https://custom/rotate",
        JSON.stringify({
          direction: "right",
        })
      );
    }
  });
  
  // Boutons de confirmation et d'annulation
  $("#confirm-btn").click(() => {
    $.post(
      "https://custom/exit",
      JSON.stringify({
        apply: true,
      })
    );
  });
  
  $("#cancel-btn").click(() => {
    $.post(
      "https://custom/exit",
      JSON.stringify({
        apply: false,
      })
    );
  });
  
  // Gestion des menus de navigation
  $("#perf-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des performances
    $("#performance-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#perf-btn").addClass("active");
    // Générer l'UI des performances
    generatePerformanceUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "performance",
      })
    );
  });
  
  $("#ext-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur de l'extérieur
    $("#exterior-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#ext-btn").addClass("active");
    // Générer l'UI de l'extérieur
    generateExteriorUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "exterior",
      })
    );
  });
  
  $("#int-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur de l'intérieur
    $("#interior-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#int-btn").addClass("active");
    // Générer l'UI de l'intérieur
    generateInteriorUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "interior",
      })
    );
  });
  
  $("#color-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des couleurs
    $("#color-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#color-btn").addClass("active");
    // Générer l'UI des couleurs
    generateColorUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "color",
      })
    );
  });
  
  $("#roues-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des roues
    $("#wheels-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#roues-btn").addClass("active");
    // Générer l'UI des roues
    generateWheelsUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "wheels",
      })
    );
  });
  
  $("#extra-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des extras
    $("#extras-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#extra-btn").addClass("active");
    // Générer l'UI des extras
    generateExtrasUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "extras",
      })
    );
  });
  
  $("#portes-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des portes
    $("#doors-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#portes-btn").addClass("active");
    // Générer l'UI des portes
    generateDoorsUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "doors",
      })
    );
  });
  
  window.addEventListener("message", function(event) {
    const data = event.data;
  
    if (data.action === "open") {
        // Réinitialiser les données avec celles reçues
        if (data.performanceCategories) {
            performanceCategories = data.performanceCategories;
        }
        if (data.exteriorCategories) {
            exteriorCategories = data.exteriorCategories;
        }
        if (data.interiorCategories) {
            interiorCategories = data.interiorCategories;
        }
        if (data.colorCategories) {
            colorCategories = data.colorCategories;
        }
        if (data.wheelCategories) {
            wheelCategories = data.wheelCategories;
        }
        if (data.windowTints) {
            windowTints = data.windowTints;
        }
        if (data.wheelSmokeColors) {
            wheelSmokeColors = data.wheelSmokeColors;
        }
        
        // Mettre à jour les données du véhicule
        if (data.vehicleData) {
            vehicleData = data.vehicleData;
            console.log("Données véhicule reçues:", vehicleData);
        }
        
        // Afficher le menu
        $("#customMenu").show();
        $("#rotation-controls").show();
        
        // Activer le menu performance par défaut
        $("#perf-btn").click();
    } else if (data.action === "close") {
        $("#customMenu").hide();
        $("#rotation-controls").hide();
    } else if (data.action === "updatePrice") {
        $("#price").text("$" + data.price);
    }
  });



  });
