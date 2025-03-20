import { BreadcrumbItem } from "@/types";
import Card_Slider from "@/components/card-slider"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard_admin',
        href: '/dashboardadmin',
    },
];

export default function Dashbord_profil_admin(){
  return(
    <>
    
    <Card_Slider></Card_Slider>
    </>

  )

}