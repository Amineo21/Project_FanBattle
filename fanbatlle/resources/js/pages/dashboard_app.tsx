import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard_app',
        href: '/dashboard',
    },
];


export default function Dashbord_profil() {

  return (
    <AppLayout breadcrumbs = {breadcrumbs} >
        <Head title="Dashboard_app" />
        <header>
        <div>
          <i></i>
          <p className="Username">Username</p>
          <p className="RealName">RealName</p>
        </div>

          <nav>
            <a href="">Community</a>
            <a href="">Vote now</a>

            <button type="button">Sign out</button>
          </nav>

          
        </header>



        <section className="main">
          <h2>Welcome UserName <i></i></h2>

          <div className="CardStats">
            <div className="card">
              <h4> </h4>
              <p className="number"></p>
            </div>
          </div>

          <div className="Heatmap">
            <div className="Filter">
              <button></button>
              <button></button>
              <button></button>
              </div>

              <div>
                <img src="" alt="" />
              </div>
          </div>

        </section>

      </AppLayout>

        


      
  );
}