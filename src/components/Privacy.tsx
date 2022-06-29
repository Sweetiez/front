import Page from './Page/Page';
import NavMenu from './NavMenu/NavMenu';
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <Page>
      <NavMenu />
      <div className="px-10 privacy">
        <h1 className="text-center font-birthstone text-4xl font-bold mt-8">
          Politique de confidentialité
        </h1>
        <br/>
        <br/>
        <p>
          FI sweets construit avec ses clients, ses partenaires et ses
          consommateurs des relations fortes et durables, fondées sur la
          confiance réciproque : assurer la sécurité et la confidentialité de
          leurs données à caractère personnel est une priorité absolue pour FI
          sweets.
          <br />
          FI sweets respecte l’ensemble des dispositions réglementaires et
          législatives françaises et européennes relatives à la protection des
          données à caractère personnel.
          <br />
          FI sweets applique une politique de confidentialité extrêmement
          stricte pour garantir la protection des données à caractère personnel
          des utilisateurs de ses sites internet et autres applications :
          <br />
          Chaque utilisateur reste maître de ses données. Elles sont traitées de
          manière transparente, confidentielle et sécurisée.
          <br />
          FI sweets est engagé dans une démarche continue de protection des
          données de ses utilisateurs, en conformité avec la Loi Informatique et
          Libertés du 6 janvier 1978 modifiée (ci-après « LIL ») et du Règlement
          (UE) Général sur la Protection des Données du 27 avril 2016 (ci-après
          « RGPD »).
        </p>
        <h1 className="text-xl font-bold mt-8">DEFINITIONS</h1>
        <p>
          « Données à caractère personnel » désigne toute information se
          rapportant à une personne physique identifiée ou identifiable ; est
          réputée être une «personne physique identifiable» une personne
          physique qui peut être identifiée, directement ou indirectement,
          notamment par référence à un identifiant, tel qu'un nom, un numéro
          d'identification, des données de localisation, un identifiant en
          ligne, ou à un ou plusieurs éléments spécifiques propres à son
          identité physique, physiologique, génétique, psychique, économique,
          culturelle ou sociale (ci-après dénommée « Personne concernée »).
          <br /> « nous » désigne la société FI sweets.
          <br />« Responsable du traitement » désigne la personne physique ou
          morale qui détermine les finalités et les moyens du traitement.
          <br />« vous » tout utilisateur / visiteur de la Plateforme.
        </p>
        <h1 className="text-xl font-bold mt-8">
          OBJET DE LA PRÉSENTE POLITIQUE
        </h1>
        <p>
          Nous accordons beaucoup d’importance à la protection de vos Données à
          caractère personnel.
          <br />
          Nous avons développé cette politique pour vous informer des conditions
          dans lesquelles nous collectons, traitons, utilisons et protégeons vos
          Données à caractère personnel. Cette politique s’applique notamment
          aux Données à caractère personnel traitées par FI sweets via la
          Plateforme. Veuillez la lire attentivement afin de savoir quelles
          catégories de Données à caractère personnel font l’objet d’une
          collecte et d’un traitement, comment nous utilisons ces données et
          avec qui nous sommes susceptibles de les partager. Cette politique
          décrit également quels sont vos droits et comment vous pouvez nous
          contacter pour les exercer ou pour nous poser vos éventuelles
          questions au sujet de vos Données à caractère personnel.
        </p>
        <h1 className="text-xl font-bold mt-8">
          IDENTITE ET COORDONNEES DU RESPONSABLE DE TRAITEMENT
        </h1>
        <p>
          Le Responsable du traitement est FI sweets société située au 13 rue
          romy scneider, Ormesson sur marne.
        </p>
        <h1 className="text-xl font-bold mt-8">
          {' '}
          COLLECTE & ORIGINE DES DONNEES A CARACTERE PERSONNEL
        </h1>
        <p>
          Nous sommes susceptibles de collecter vos Données à caractère
          personnel directement (notamment via les formulaires de collecte
          disponibles sur notre Plateforme) ou indirectement (notamment votre
          employeur et/ou les technologies de notre Plateforme).
          <br />
          Nous nous engageons à recueillir votre consentement et/ou à vous
          permettre de vous opposer à l’utilisation de vos données pour
          certaines finalités, dès que cela est nécessaire. Le cas échéant, vous
          pourrez retirer votre consentement à tout moment dans les sections
          concernées de l’espace client de la Plateforme.
        </p>
        <h1 className="text-xl font-bold mt-8">
          TYPES DE DONNEES A CARACTERE PERSONNEL QUE NOUS COLLECTONS ET
          UTILISONS DANS LE CADRE DE NOS PRESTATIONS
        </h1>
        <p>
          Nous pouvons collecter et traiter notamment les types de Données à
          caractère personnel suivants :
          <br />
          les informations que vous fournissez en remplissant les formulaires
          sur la Plateforme, notamment à des fins d’inscription et de
          personnalisation de votre compte, de participation à des études de
          satisfaction (ex. : civilité, nom, prénom, coordonnées, société,
          numéro de matricule interne etc.) ;
          <br />
          les informations que vous fournissez à des fins d’authentification, de
          connexion et de navigation internet (ex. : identifiants, adresse IP,
          cookies etc.) ;
          <br />
          les informations que vous fournissez à des fins de gestion et de
          paiement d’une commande ou d’un service (ex. : préférences
          alimentaires, informations relatives au paiement etc.) ;
          <br />
          les informations que vous fournissez par le biais des « posts », des
          commentaires ou d’autres contenus que vous partagez avec nous.
          <br />A défaut d’être signalées comme facultatives, les Données à
          caractère personnel à fournir ont un caractère obligatoire et à défaut
          de renseigner ces informations, votre demande ne pourra pas être prise
          en compte.
        </p>
        <h1 className="text-xl font-bold mt-8">
          FINALITES POUR LESQUELLES NOUS UTILISONS LES DONNEES A CARACTERE
          PERSONNEL DANS LE CADRE DE NOS PRESTATIONS EN MILIEU PROFESSIONNEL
        </h1>
        <table className="min-w-full divide-y divide-x divide-gray-200 border">
          <thead className="bg-gray-50" >
            <tr>
              <th className="border">N°</th>
              <th className="border">Finalité du traitement</th>
              <th className="border">Fondement légal</th>
              <th className="border">Durée de conservation des données</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-x divide-gray-200">
            <tr>
              <td className="border">1</td>
              <td className="border">
                Gérer et traiter les demandes de création et de gestion de
                comptes sur la Plateforme
              </td>
              <td className="border">
                L’Exécution et la gestion de notre relation contractuelle avec
                vous et/ou avec notre client (votre employeur)
              </td>
              <td className="border">
                Jusqu’à 12 mois à compter de la dernière activité ou
                immédiatement suite au traitement de la demande de suppression
                du compte
              </td>
            </tr>
            <tr>
              <td className="border">2</td>
              <td className="border">
                Fournir les services et prestations commandées sur la Plateforme
              </td>
              <td className="border">
                L’Exécution et la gestion de notre relation contractuelle avec
                vous et/ou avec notre client (votre employeur)
              </td>
              <td className="border">
                Jusqu’à 5 ans à compter de la fin de notre relation
                contractuelle avec votre employeur
              </td>
            </tr>
            <tr>
              <td className="border">3</td>
              <td className="border">Répondre à vos demandes de contact</td>
              <td className="border">
                L’Exécution et la gestion de notre relation contractuelle avec
                vous et/ou avec notre client (votre employeur)
                <br />
                Notre intérêt légitime à améliorer la qualité et l’excellence
                opérationnelle des services que nous vous proposons
              </td>
              <td className="border">Jusqu’à 3 ans après le dernier contact</td>
            </tr>
            <tr>
              <td className="border">4</td>
              <td className="border">
                Vous permettre de consulter votre solde et/ou vos historiques,
                votre consommation
              </td>
              <td className="border">
                L’exécution et la gestion de notre relation contractuelle avec
                vous et/ou avec notre client (votre employeur)
              </td>
              <td className="border">Jusqu’à la suppression de votre compte</td>
            </tr>
            <tr>
              <td className="border">5</td>
              <td className="border">
                Vous proposer des offres pour nos produits et services, vous
                adresser des newsletters, etc.
              </td>
              <td className="border">
                Notre intérêt légitime à améliorer la qualité et l’excellence
                opérationnelle des services que nous vous proposons
                <br />
                Votre consentement pour la réception d'offres de nos partenaires
              </td>
              <td className="border">
                Pour les clients existants : Jusqu’à 12 mois à compter de la
                dernière activité ou immédiatement suite au traitement de la
                demande de suppression du compte
                <br />
                Pour les prospects : jusqu’à 3 ans après le dernier contact
                émanant de leur part
              </td>
            </tr>
            <tr>
              <td className="border">6</td>
              <td className="border">
                Partager des données de profils avec des partenaires tiers à des
                fins de ciblage publicitaire pour des audiences de profils
                similaires
              </td>
              <td className="border">Votre consentement</td>
              <td className="border">
                Jusqu’à 12 mois à compter de la dernière activité ou
                immédiatement suite au traitement de la demande de suppression
                du compte
              </td>
            </tr>
            <tr>
              <td className="border">7</td>
              <td className="border">Réalisation des études de satisfaction</td>
              <td className="border">
                Notre intérêt légitime à améliorer la qualité et l’excellence
                opérationnelle des services que nous vous proposons
              </td>
              <td className="border">
                Jusqu’à 12 mois à compter de la dernière activité ou
                immédiatement suite au traitement de la demande de suppression
                du compte
              </td>
            </tr>
            <tr>
              <td className="border">8</td>
              <td className="border">
                Personnaliser et améliorer votre expérience sur notre Plateforme
              </td>
              <td className="border">
                Notre intérêt légitime à améliorer la qualité et l’excellence
                opérationnelle des services que nous vous proposons
              </td>
              <td className="border">
                Jusqu’à 12 mois à compter de la dernière activité ou
                immédiatement suite au traitement de la demande de suppression
                du compte
              </td>
            </tr>
            <tr>
              <td className="border">9</td>
              <td className="border">
                Conserver vos données de paiement par l’un de nos prestataires
                de paiement sécurisé afin de faciliter vos prochaines
                transactions sur la Plateforme
              </td>
              <td className="border">Votre consentement</td>
              <td className="border">Jusqu'au retrait de votre consentement</td>
            </tr>
            <tr>
              <td className="border">10</td>
              <td className="border">
                Conserver les données relatives à vos préférences alimentaires
                afin de personnaliser vos commandes
              </td>
              <td className="border">Votre consentement</td>
              <td className="border">Jusqu'au retrait de votre consentement</td>
            </tr>
            <tr>
              <td className="border">11</td>
              <td className="border">
                Conserver les données relatives aux factures en vue d’un
                contrôle en matière fiscale ou comptable
              </td>
              <td className="border">Le respect de certaines obligations légales</td>
              <td className="border">Jusqu'à 10 ans</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-xl font-bold mt-8">
          DUREE DE CONSERVATION DE VOS DONNÉES A CARACTERE PERSONNEL
        </h1>
        <p>
          Nous conserverons vos Données à caractère personnel pendant une durée
          qui n’excède pas la durée nécessaire aux finalités pour lesquelles
          elles sont collectées et traitées (cf. tableau ci-dessus).
          <br />A l’issue de cette durée, les données strictement pertinentes
          peuvent être conservées (i) à des fins probatoires (en cas de
          contentieux ou en cas de contrôle par des organismes habilités), (ii)
          à des fins de respect des durées de prescription légales ou
          réglementaires et/ou (iii) pour respecter une obligation contractuelle
          avec nos clients.
        </p>
        <h1 className="text-xl font-bold mt-8">
          COMMUNICATION DES DONNÉES A CARACTERE PERSONNEL
        </h1>
        <p>
          Nous limitons l’accès à vos Données à caractère personnel à nos
          équipes qui ont besoin d’en connaître afin de traiter votre demande ou
          vous fournir le service demandé.
          <br />
          Nous ne divulguons par vos Données à caractère personnel à des tiers
          non autorisés. Nous pouvons toutefois partager vos données avec :
          <br />
          nos clients dans le cadre d’exécution d’une obligation contractuelle ;
          <br />
          les partenaires commerciaux de FI sweets (avec votre consentement
          préalable).
          <br />
          Nous nous assurons que ces destinataires mettent en œuvre des mesures
          de sécurité et de confidentialité appropriées afin que vos Données à
          caractère personnel soient protégées.
          <br />
          Nous n’autorisons pas ces destinataires à utiliser ou divulguer vos
          données, sauf dans la mesure nécessaire pour exécuter les services
          pour notre compte ou respecter les obligations légales. Par ailleurs,
          nous pouvons partager des Données à caractère personnel vous
          concernant (i) si la loi ou une procédure juridique nous impose de le
          faire, (ii) en réponse à une demande de toute autorité publique, ou
          (iii) si nous considérons que la transmission de ces données est
          nécessaire ou appropriée pour assurer la sécurité des personnes ou
          protéger le public et pour protéger nos droits et propriétés ainsi que
          ceux de nos clients.
        </p>
        <h1 className="text-xl font-bold mt-8">
          INFORMATIONS PERSONNELLES ET MINEURS
        </h1>
        <p>
          Le Plateforme s’adresse à des personnes majeures capables de
          contracter des obligations conformément à la législation du pays dans
          lequel vous vous trouvez.
          <br />
          En France, l'Utilisateur mineur de moins de 15 ans ou incapable doit
          obtenir le consentement préalable de son responsable légal
          préalablement à la saisie de ses données sur le Plateforme.
        </p>
        <h1 className="text-xl font-bold mt-8">
          TRANSFERTS DE DONNEES A CARACTERE PERSONNEL
        </h1>
        <p>
          Afin de garantir la sécurité et la confidentialité des Données à
          caractère personnel ainsi transférées, nous prenons toutes mesures
          nécessaires pour veiller à ce que ces données bénéficient d’une
          protection adéquate, telles que la signature de Clauses Contractuelles
          Types de la Commission Européenne ou tout autre mécanisme assurant un
          niveau de protection équivalent.
        </p>
        <h1 className="text-xl font-bold mt-8">VOS DROITS</h1>
        <p>
          Conformément à la loi applicable vous disposez de certains droits
          relatifs au traitement de vos Données à caractère personnel.
        </p>
        <table className="border">
          <tbody>
            <tr>
              <td className="border">Droit d’accès</td>
              <td className="border">
                Vous pouvez demander l’accès à vos Données à caractère
                personnel. Vous pouvez également demander la rectification des
                Données à caractère personnel qui seraient inexactes ou à ce que
                les données incomplètes soient complétées.
                <br />
                Vous avez également le droit de connaître les sources de ces
                Données à caractère personnel.
              </td>
            </tr>
            <tr>
              <td className="border">Droit de suppression</td>
              <td className="border">
                Votre droit à l’oubli vous autorise à demander la suppression
                des Données à caractère personnel lorsque :
                <br />1 - les données ne sont plus nécessaires à la réalisation
                des finalités pour lesquelles elles ont été collectées et
                traitées ;
                <br />2 - vous choisissez de retirer votre consentement (dans
                les cas où votre consentement a été collecté comme base
                juridique du traitement) ce retrait n’impactant pas la licéité
                du traitement avant sa mise en œuvre ;
                <br />3 - vous vous opposez au traitement ;
                <br />4 - vos données ont été traitées de manière illicite ;
                <br />5 - vos données doivent être effacées pour respecter une
                obligation légale ; ou
                <br />6 - leur suppression est requise pour garantir la
                conformité à la législation en vigueur.
              </td>
            </tr>
            <tr>
              <td className="border">Droit à la limitation</td>
              <td className="border">
                Vous pouvez également demander la limitation au traitement de
                vos Données à caractère personnel si :
                <br />1 - vous contestez l’exactitude de ces données ;
                <br />2 - nous n’avons plus besoin de ces données pour les
                besoins du traitement ; et
                <br />3 - vous vous êtes opposé(e) au traitement des données.
              </td>
            </tr>
            <tr>
              <td className="border">Droit de vous opposer aux messages de prospection directe</td>
              <td className="border">
                Vous pourrez à tout moment nous demander de ne plus recevoir de
                publicités ou de prospections en nous contactant directement et
                gratuitement, ou au moyen du lien de désinscription inclus dans
                toute prospection que nous serions susceptible de vous adresser
                par courrier électronique ou en envoyant un email à l’adresse
                indiquée ci-après. Cette opposition est sans préjudice à la
                légalité des envois réalisés avant sa mise en œuvre.
                <br />
                Conformément à l’article L.223-2 du Code de la consommation,
                l’Utilisateur est informé de son droit à s’inscrire sans frais
                sur la liste d’opposition au démarchage téléphonique
                (www.bloctel.gouv.fr).
              </td>
            </tr>
            <tr>
              <td className="border">
                Droit de ne pas faire l’objet d’une décision fondée
                exclusivement sur un Traitement automatisé des données
              </td>
              <td className="border">
                Vous avez la possibilité de ne pas faire l’objet d’une décision
                fondée exclusivement sur un Traitement automatisé produisant des
                effets juridiques vous concernant ou vous affectant de manière
                significative.
              </td>
            </tr>
            <tr>
              <td className="border">Droit à la portabilité</td>
              <td className="border">
                Vous pouvez nous demander de vous fournir vos Données à
                caractère personnel dans un format structuré, communément
                utilisé, lisible par une machine, ou vous pouvez demander à ce
                qu’elles soient « portées » directement à un autre responsable
                du traitement à condition que :
                <br />1 - le traitement soit fondé sur votre consentement ou sur
                l’exécution d’un contrat avec vous ; et
                <br />2 - qu’il soit réalisé par des moyens automatisés.{' '}
              </td>
            </tr>
            <tr>
              <td className="border">
                Droit d’émettre des directives anticipées sur le traitement de
                vos Données à caractère personnel après votre décès
              </td>
              <td className="border">
                En application de la loi française relative à la protection des
                Données à caractère personnel, vous pouvez également définir des
                directives sur l’exercice de vos droits prévus par cette section
                après votre mort, (notamment sur leur durée de conservation,
                leur suppression et/ou leur communication) ainsi que de désigner
                une personne chargée de l’exercice de ces droits.
              </td>
            </tr>
            <tr>
              <td className="border">
                Droit d’introduire une réclamation auprès d’une autorité de
                contrôle
              </td>
              <td className="border">
                Si vous avez des préoccupations ou des réclamations en ce qui
                concerne la protection de vos Données à caractère personnel,
                vous disposez d’un droit d’introduire une réclamation auprès de
                la Commission Nationale de l’Informatique et des Libertés via le
                lien suivant : www.cnil.fr.
                <br />
                Vous pouvez nous adresser au préalable toute demande en nous
                contactant à l’adresse indiquée ci-après afin que nous puissions
                traiter votre demande et trouver une solution amiable.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          Pour exercer ces droits, vous pouvez formuler votre demande par email
          à l’adresse fi.sweets.94@gmail.com en nous indiquant votre nom, prénom
          et l’objet de votre demande. Nous sommes susceptibles de vous demander
          des informations supplémentaires afin de vous identifier et d’être en
          mesure de traiter votre demande.
        </p>
        <h1 className="text-xl font-bold mt-8">SECURITE</h1>
        <p>
          {' '}
          Nous mettons en œuvre toutes les mesures techniques et
          organisationnelles afin d’assurer la sécurité et la confidentialité
          des traitements de Données à caractère personnel.
          <br />A ce titre, nous prenons toutes les précautions utiles, au
          regard de la nature des Données à caractère personnel et des risques
          présentés par le traitement, afin de préserver la sécurité des données
          et, notamment, d’empêcher qu’elles soient déformées, endommagées ou
          que des tiers non autorisés y aient accès (protection physique des
          locaux, procédés d’authentification avec accès personnel et sécurisé
          via des identifiants et mots de passe confidentiels, journalisation
          des connexions, chiffrement de certaines données etc.).
        </p>
        <h1 className="text-xl font-bold mt-8">LIENS VERS D’AUTRES SITES</h1>
        <p>
          Nous fournissons occasionnellement des liens vers d’autres sites Web à
          titre pratique et informatif. Ces sites exploités par des tiers
          peuvent avoir leur propre politique de confidentialité ou conditions
          d’utilisation, que nous vous suggérons fortement d’examiner. Nous
          déclinons toute responsabilité quant au contenu de ces sites, quant
          aux produits et services susceptibles d’y être proposés ou quant à
          toute autre utilisation.
        </p>
        <h1 className="text-xl font-bold mt-8">
          MISE A JOUR DE NOTRE POLITIQUE DE CONFIDENTIALITE
        </h1>
        <p>
          {' '}
          <br /> Nous sommes susceptibles de mettre à jour ou modifier
          ponctuellement la présente politique dans l’hypothèse où nos activités
          ou nos obligations légales évoluent de manière substantielle. Dans le
          cas où nous apporterions des changements significatifs à la présente
          politique, nous publierons une note d’information sur notre Plateforme
          au moment de l’entrée en application des changements en question.
          Consultez régulièrement cette page pour un suivi des modifications.
          <br />
          Si vous avez des questions ou des commentaires en ce qui concerne
          cette politique, n’hésitez pas à nous contacter à l’adresse
          fi.sweets.94@gmail.com .
        </p>
        <br/>
        <br/>
        <br/>
      </div>
    </Page>
  );
};

export default Privacy;
