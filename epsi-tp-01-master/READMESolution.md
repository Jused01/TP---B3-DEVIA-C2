Liste des problèmes à résoudre
Problème #1: Navigation incorrecte
Symptôme: Certains liens rechargent complètement la page au lieu d'utiliser le routeur Angular. Impact: L'expérience utilisateur est dégradée, l'application perd son état. Indice: Vérifiez comment les liens sont définis dans les templates HTML, en particulier les balises <a>.

Solution: Utiliser la directive routerLink au lieu de l'attribut href pour les liens internes afin d'assurer une navigation sans rechargement de page.

Problème #2: Besoin de formatage de texte
Symptôme: Les catégories de livres ne sont pas affichées correctement. Impact: L'affichage n'est pas esthétique, les underscores sont visibles. Indice: Vous devez créer un pipe personnalisé pour formater le texte.

Solution: Créer un pipe personnalisé qui transforme les underscores en espaces et met la première lettre de chaque mot en majuscule. dans le fichier Fichier: src/app/components/home/home.component.html Ajout du pipe uppercase pour afficher le titre en majuscules.

Problème #3: Structure de page incomplète
Symptôme: L'application manque de modularité et de réutilisation de code. Impact: La maintenance du code est difficile, des composants sont dupliqués. Indice: Identifiez les éléments communs qui pourraient être extraits en composants réutilisables. 

Solution: Créer des composants réutilisables pour le header et le footer afin de réduire la duplication de code. dans Fichier: src/app/app.component.html Ajout des balises <header> et <footer> pour structurer la page.
Utilisation de routerLink pour la navigation sans rechargement de page.

Problème #4: Pages non affichées
Symptôme: Certaines pages ne s'affichent pas correctement. Impact: Les utilisateurs ne peuvent pas accéder à certaines fonctionnalités. Indice: Vérifiez la configuration des routes et la structure des composants.

Solution: Vérifier et corriger la configuration des routes dans 
app.routes.ts et s'assurer que les composants sont correctement importés et déclarés. Ajout des routes pour les composants HomeComponent, BookListComponent, BookDetailComponent, et AddBookComponent.

Problème #5: Route manquante
Symptôme: La page de détail d'un livre n'est pas accessible. Impact: Les utilisateurs ne peuvent pas voir les détails d'un livre. Indice: Vous devez créer une route dans le fichier de configuration des routes.

Solution: Ajouter une route pour la page de détail d'un livre dans 
app.routes.ts Ajout de la route pour la page de détail d'un livre (/books/:id).
.

Problème #6: Formulaire incomplet
Symptôme: Le formulaire d'ajout de livre n'est pas implémenté. Impact: Les utilisateurs ne peuvent pas ajouter de nouveaux livres. Indice: Vous devez créer un formulaire avec les champs nécessaires.

Solution: Créer un formulaire réactif avec les champs title, author, description, et category. Création du formulaire avec les champs title, author, description, et category.
Ajout des validations nécessaires dans src/app/components/add-book/add-book.component.ts

Problème #7: Validations manquantes
Symptôme: Le formulaire accepte des données invalides. Impact: Des données incomplètes ou incorrectes peuvent être soumises. Indice: Ajoutez des validations aux champs du formulaire.

Solution: Ajouter des validations (par exemple, Validators.required) aux champs du formulaire. dans src/app/components/add-book/add-book.component.ts Ajout des validations Validators.required pour chaque champ du formulaire.

Problème #8: Navigation manquante
Symptôme: Impossible de revenir à la page précédente depuis certaines vues. Impact: L'utilisateur se retrouve bloqué dans certaines pages. Indice: Ajoutez un bouton de retour et implémentez la navigation.

Solution: Ajouter un bouton de retour dans les composants appropriés et utiliser le service Router pour naviguer vers la page précédente. donc Ajout de la méthode 
goBack pour naviguer vers la page précédente. dans src/app/components/book-detail/book-detail.component.ts

Problème #9: Erreur dans la console
Symptôme: Erreur "Cannot read properties of undefined" dans la console. Impact: L'application peut planter lorsque les données ne sont pas chargées. Indice: Gérez correctement les données asynchrones avant d'y accéder.

Solution: Utiliser des guards ou des vérifications dans les templates pour s'assurer que les données sont disponibles avant de les afficher. dans src/app/components/book-detail/book-detail.component.html Ajout de la directive *ngIf="book" pour s'assurer que les données sont disponibles avant de les afficher.

Problème #10: Directive non appliquée
Symptôme: Certains éléments ne sont pas mis en évidence comme prévu. Impact: L'expérience utilisateur est dégradée, manque d'indications visuelles. Indice: Appliquez la directive highlight aux éléments appropriés.

Solution: Appliquer la directive highlight aux éléments appropriés dans les templates. dans src/app/directives/highlight.directive.ts et src/app/components/book-list/book-list.component.html Utilisation de la directive appHighlight pour mettre en évidence les titres des livres favoris.

Problème #11: Bouton non fonctionnel
Symptôme: Certains boutons ne réagissent pas aux clics. Impact: Les actions ne peuvent pas être effectuées. Indice: Vérifiez les gestionnaires d'événements associés aux boutons.

Solution: Vérifier et corriger les gestionnaires d'événements associés aux boutons. dans src/app/components/book-list/book-list.component.ts Ajout des méthodes 
toggleFavorite
 et 
deleteBook
 pour gérer les actions des boutons.

Problème #12: Données non affichées
Symptôme: Les données sont chargées mais n'apparaissent pas dans l'interface. Impact: L'utilisateur ne voit pas les informations importantes. Indice: Vérifiez comment les données sont passées et affichées dans les templates.

Solution: Vérifier que les données sont correctement passées aux composants et affichées dans les templates. dans src/app/components/book-list/book-list.component.html Utilisation de la directive *ngIf pour vérifier si les données sont disponibles avant de les afficher.

Problème #13: Descriptions trop longues
Symptôme: Les descriptions des livres prennent trop de place. Impact: L'interface utilisateur est encombrée et moins lisible. Indice: Utilisez ou créez un pipe pour limiter la longueur du texte affiché.

Solution: Créer un pipe personnalisé pour limiter la longueur des descriptions et ajouter des points de suspension si nécessaire. dans src/app/components/book-list/book-list.component.html Utilisation du pipe slice pour limiter la longueur des descriptions à 20 caractères et ajouter des points de suspension.

Problème #14: Retour utilisateur manquant
Symptôme: Aucune confirmation n'est affichée après certaines actions. Impact: L'utilisateur ne sait pas si son action a réussi ou échoué. Indice: Ajoutez des alertes ou notifications pour informer l'utilisateur.

Solution: Ajouter des notifications ou des alertes pour informer l'utilisateur du succès ou de l'échec de ses actions. Dans src/app/components/add-book/add-book.component.ts Ajout d'alertes pour informer l'utilisateur du succès ou de l'échec de l'ajout du livre.

Problème #15: Erreur d'affichage du titre
Symptôme: Les titres ne s'affichent pas correctement. Impact: L'information présentée est incorrecte ou mal formatée. Indice: Vérifiez comment les titres sont manipulés et affichés.

Solution: Vérifier et corriger la manière dont les titres sont manipulés et affichés dans les templates.dans src/app/components/home/home.component.html Utilisation du pipe uppercase pour afficher le titre en majuscules.

Problème #16: Directive incomplète
Symptôme: La directive highlight ne fonctionne pas comme prévu. Impact: Certains éléments ne sont pas mis en évidence correctement. Indice: Modifiez la directive pour qu'elle affecte à la fois la couleur de fond et le poids du texte.

Solution: Modifier la directive highlight pour qu'elle affecte à la fois la couleur de fond et le poids du texte.dans src/app/directives/highlight.directive.ts