import fidelizLogo from "@/public/logos/fideliz.png";
import fidelizMeLogo from "@/public/logos/fidelizme.png";
import { DataUtilities as DataUtilitiesFideliz } from "./fideliz";
import { DataUtilities as DataUtilitiesFidelizMe } from "./fidelizme";

import fil1 from "@/public/images/fil1.jpg"
import fil2 from "@/public/images/fil2.jpg"
import fil3 from "@/public/images/fil3.jpg"

import fzme1 from "@/public/images/fzme1.jpg"
import fzme2 from "@/public/images/fzme2.jpg"
import fzme3 from "@/public/images/fzme3.jpg"

export const LinksPage = [
    {
        label: 'Acceuil',
        path: '/'
    },
    {
        label: 'Fideliz',
        path: '/fideliz'
    },
    {
        label: 'FidelizMe',
        path: '/fidelizme'
    },
    
]

export const ServiApps = [
    {
        name: 'Fideliz',
        logo:  fidelizLogo,
        path: '/fideliz',
        description :"Fideliz est une application innovante conçue pour aider les petits commerçants à gérer leur programme de fidélité de manière simple et efficace. Grâce à cette application, les vendeurs peuvent facilement scanner le QR code de leurs clients, ce qui leur permet d'enregistrer des informations précieuses et d'attribuer ou de déduire des points de fidélité. Ces points peuvent ensuite être échangés contre des offres spéciales, incitant ainsi les clients à revenir et à effectuer davantage d'achats. FidelMe offre une interface intuitive qui facilite la gestion des points, tout en permettant aux commerçants de suivre l'engagement de leurs clients et d'ajuster leurs offres en conséquence.",
        DataUtilities : DataUtilitiesFideliz,
        apkUrl :`https://s1e90fypo0uqi33n.public.blob.vercel-storage.com/apks/fideliz-EhxGxFzQZQR2w924vuVXIvYeXe0HgS`,
        images: [fil1, fil2, fil3],
    
    },
    {
        name: 'FidelizMe',
        logo: fidelizMeLogo,
        path: '/fidelizme',
        description: "FidelizMe est l'application complémentaire destinée aux clients, leur permettant de générer un QR code unique qui sera utilisé lors de leurs achats chez les commerçants participants. En utilisant Fideli, les clients peuvent accumuler des points de fidélité chaque fois qu'ils effectuent un achat, ce qui leur donne accès à des promotions exclusives et à des récompenses. L'application est conçue pour être conviviale, offrant aux utilisateurs un moyen facile de suivre leurs points et d'accéder à des offres spéciales.",
        DataUtilities : DataUtilitiesFidelizMe,
        apkUrl :`https://s1e90fypo0uqi33n.public.blob.vercel-storage.com/apks/fildelizme-BUAHNt7YAMzVALDf8ZyyBWMiDRUgRX`,
        images : [fzme1, fzme2, fzme3],
   
    },
]