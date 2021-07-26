
import DashboardFrame from '../components/frames/DashboardFrame.vue'
import Dashboard from '../components/Dashboard.vue'
import i18n from '../lang/lang.js'
import Dashboard601 from '../components/gatewayRoom/Dashboard601'
import Dashboard602 from '../components/gatewayRoom/Dashboard602'
import Dashboard603 from '../components/gatewayRoom/Dashboard603'
const routes = {
  path: 'dashboard',  
  
  component: DashboardFrame,
  children:[
    {
      path:'',
      component: Dashboard,
      meta:{
        title: i18n.messages[i18n.locale]['Dashboard_Title']//只要改 Dashboard_title
        
      }
    },
    
    {
      path:'gateway601',
      name:'gateway601',
      component: Dashboard601,
      meta:{
        title: '601'
      }
    },
    {
      path:'gateway602',
<<<<<<< HEAD
      component: Dashboard602,
=======
      name:'gateway602',
      component: Dashboard602,//記得import
>>>>>>> 3fa9d229b321af547d4d0dde7c01eca0e921e6c5
      meta:{
        title: '602'
      }
    },
    {
      path:'gateway603',
<<<<<<< HEAD
      component: Dashboard603,
=======
      name:'gateway603',
      component: Dashboard603,//記得import
>>>>>>> 3fa9d229b321af547d4d0dde7c01eca0e921e6c5
      meta:{
        title: '603'
      }
    }
    
  ]   
}

const dashboardPath = [routes]


export default dashboardPath