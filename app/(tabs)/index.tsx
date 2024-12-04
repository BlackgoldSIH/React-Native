// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import React, { useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
//   Dimensions,
//   TouchableWithoutFeedback,
//   ScrollView,
//   Image,
// } from 'react-native';

// import { Ionicons } from '@expo/vector-icons';


// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

// const { width } = Dimensions.get('window');


// const App = () => {
//   const navigate = useNavigation() ; 
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const drawerAnimation = useRef(new Animated.Value(-width * 0.8)).current;

//   const toggleDrawer = () => {
//     if (isDrawerOpen) {
//       Animated.timing(drawerAnimation, {
//         toValue: -width * 0.8,
//         duration: 300,
//         useNativeDriver: false,
//       }).start(() => setIsDrawerOpen(false));
//     } else {
//       setIsDrawerOpen(true);
//       Animated.timing(drawerAnimation, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: false,
//       }).start();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Overlay for closing the drawer */}
//       {isDrawerOpen && (
//         <TouchableWithoutFeedback onPress={toggleDrawer}>
//           <View style={styles.overlay} />
//         </TouchableWithoutFeedback>
//       )}

//       {/* Sidebar Drawer */}
//       <Animated.View
//         style={[styles.drawer, { transform: [{ translateX: drawerAnimation }] }]}
//       >
//         <Text style={styles.drawerHeader}>BLACKGOLD</Text>
//         <ScrollView>
//           <SidebarItem icon="dashboard" title="Manage Projects" />
//           <SidebarItem icon="chat" title="Chat" />
//           <SidebarItem icon="attach-money" title="Track Finance" />
//           <SidebarItem icon="report" title="Report" />
//           <SidebarItem icon="feedback" title="Feedback" />
//           <SidebarItem icon="work" title="Workflow" />
//           <SidebarItem icon="group" title="Manage Researchers" />
//           <SidebarItem icon="help" title="Ask Anything" />
//           <SidebarItem icon="dashboard" title="Log In" />
//         </ScrollView>
//       </Animated.View>

//       {/* Navbar */}
//       <View style={styles.navbar}>
//         <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
//           <Text style={styles.menuButtonText}>☰</Text>
//         </TouchableOpacity>
//         <Text style={styles.navbarTitle}>BLACKGOLD</Text>
//         <TouchableOpacity onPress={() => alert('Notifications')} style={styles.navbarIcon}>
//           <MaterialIcons name="notifications" size={24} color="black" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => alert('Profile')} style={styles.navbarIcon}>
//           <FontAwesome name="user" size={24} color="black" />
//         </TouchableOpacity>
//         <View style={styles.profile}>
//             <Text style={styles.profileName}>Pavan Shimpi</Text>
//             <Ionicons name="chevron-down" size={16} color="#000" />
//           </View>
//       </View>

//       {/* Main Content */}
//       <View style={styles.mainContent}>
//         <ScrollView contentContainerStyle={styles.cardsContainer}>
//           {Array.from({ length: 6 }).map((_, index) => (
//             <View key={index} style={styles.card}>
//               <Text style={styles.cardTitle}>Product Title {index + 1}</Text>
//               <Text>ID: 12345{index}</Text>
//               <Text>Start Date: 16 Nov 2024</Text>
//               <Text>End Date: 15 Jan 2025</Text>
//               <Image src='' height={20} width={20} />
//               <View style={styles.progressContainer}>
//                 <Text style={styles.progressText}>75% Completed</Text>
//               </View>
//               <TouchableOpacity style={styles.viewSummaryButton}>
//                 <Text style={styles.viewSummaryText}>View Summary</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </View>
//   );
// };


// const SidebarItem = ({ icon, title }) => {
//   const navigation = useNavigation() ; 
//   return ( 
//     <TouchableOpacity style={styles.drawerItem} onPress={() =>  navigation.navigate("set")}>
//     <MaterialIcons name={icon} size={24} color="#fff" style={styles.drawerItemIcon} />
//     <Text style={styles.drawerItemText}>{title}</Text>
//   </TouchableOpacity>
//   )
// }
 
 


// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     zIndex: 1,
//   },
//   drawer: {
//     position: 'absolute',
//     left: 0,
//     top: 2,
//     bottom: 0,
//     width: width * 0.8,
//     backgroundColor: '#192841',
//     padding: 20,
//     zIndex: 2,
//     borderTopRightRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   drawerHeader: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#555',
//   },
//   drawerItemIcon: {
//     marginRight: 15,
//   },
//   drawerItemText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   navbar: {
//     height: 60,
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//   },
//   menuButton: {
//     padding: 10,
//   },
//   menuButtonText: {
//     color: 'black',
//     fontSize: 24,
//   },
//   navbarTitle: {
//     color: 'black',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   navbarIcon: {
//     padding: 10,
//   },
//   mainContent: {
//     flex: 1,
//     zIndex: 0,
//     marginTop: 60, // Space for the navbar
//   },
//   cardsContainer: {
//     padding: 10,
//     alignItems: 'center',
//   },
//   card: {
//     width: '90%',
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   progressContainer: {
//     marginTop: 10,
//     marginBottom: 10,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 5,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   progressText: {
//     color: '#121212',
//     fontSize: 14,
//   },
//   viewSummaryButton: {
//     backgroundColor: '#121212',
//     padding: 10,
//     borderRadius: 5,
//   },
//   viewSummaryText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   profile: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 10,
//   },
//   profileName: {
//     fontSize: 14,
//     marginRight: 5,
//   },
// });

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';


import FontAwesome from '@expo/vector-icons/FontAwesome';
import Chat from '@/components/Chat';
import TrackFinance from '@/components/TrackFinance';
import Report from '@/components/Report';
import Feedback from '@/components/Feedback';
import Workflow from '@/components/Workflow';
import ManageResearchers from '@/components/ManageReasearcher';
import AskAnything from '@/components/AskAnything';
import ManageProjects from '@/components/ManageProjects';
import LoginPage from '@/components/Login';
import HelpPage from '@/components/Help';
import SecurityPage from '@/components/Security';
import SettingsPage from '@/components/Settings';
import ProjectCard from '@/components/ProjectCard';
import ProjectCards from '@/components/ProjectCard';
import Tools from '@/components/Tools';
import Login from '@/components/Login';

const { width } = Dimensions.get('window');

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const drawerAnimation = useRef(new Animated.Value(-width * 0.8)).current;

  // Current Page State
  const [currentPage, setCurrentPage] = useState('login'); // Default Page

  const toggleDrawer = () => {
    
    if (isDrawerOpen) {
      Animated.timing(drawerAnimation, {
        toValue: -width * 0.8,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsDrawerOpen(false));
    } else {
      setIsDrawerOpen(true);
      Animated.timing(drawerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    toggleDrawer(); // Close the drawer after navigation
  };

  const navigatToPage = (page) => {
    setCurrentPage(page);
   // toggleDrawer(); // Close the drawer after navigation
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'Manage Projects':
        return ( 
          <View style={styles.container}>
            <ProjectCards />
     </View>
      
        )
      case 'Chat':
        return <Chat />;
      case 'Track Finance':
        return <TrackFinance />;
      case 'Report':
        return <Report />;
      case 'Feedback':
        return <Feedback />;
      case 'Workflow':
        return <Workflow />;
      case 'Manage Researchers':
        return <ManageResearchers />;
      case 'Ask Anything':
        return <AskAnything />;
        case 'login':
        return <LoginPage />;
        case 'help':
        return <HelpPage />;
        case 'security':
        return <SecurityPage />;
        case 'settings':
        return <SettingsPage />;
        case 'tools':
        return <Tools />;
      default:
        return <LoginPage />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Overlay for closing the drawer */}
      {isDrawerOpen && (
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Sidebar Drawer */}
      <Animated.View
        style={[styles.drawer, { transform: [{ translateX: drawerAnimation }] }]}
      >
        <Image
            source={require("../../components/logo.png")} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />
        <ScrollView>
          <SidebarItem
            icon="dashboard"
            title="Manage Projects"
            onPress={() => navigateToPage('Manage Projects')}
          />
          <SidebarItem
            icon="chat"
            title="Chat"
            onPress={() => navigateToPage('Chat')}
          />
          <SidebarItem
            icon="attach-money"
            title="Track Finance"
            onPress={() => navigateToPage('Track Finance')}
          />
          <SidebarItem
            icon="report"
            title="Report"
            onPress={() => navigateToPage('Report')}
          />
          <SidebarItem
            icon="feedback"
            title="Feedback"
            onPress={() => navigateToPage('Feedback')}
          />
          <SidebarItem
            icon="work"
            title="Workflow"
            onPress={() => navigateToPage('Workflow')}
          />
          <SidebarItem
            icon="group"
            title="Manage Researchers"
            onPress={() => navigateToPage('Manage Researchers')}
          />
          <SidebarItem
            icon="help"
            title="Ask Anything"
            onPress={() => navigateToPage('Ask Anything')}
          />
          <View style={{marginTop:120}}>
          <SidebarItem
            icon="login"
            title="Login"
            onPress={() => navigateToPage('login')}
          />
          <SidebarItem
            icon="help"
            title="Help"
            onPress={() => navigateToPage('help')}
          />
          <SidebarItem
            icon="security"
            title="Security"
            onPress={() => navigateToPage('security')}
          />
          <SidebarItem
            icon="tools"
            title="Tools"
            onPress={() => navigateToPage('tools')}
          />
          <SidebarItem
            icon="settings"
            title="Settings"
            onPress={() => navigateToPage('settings')}
          />
          </View>

        </ScrollView>
      </Animated.View>

      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
          
          <Text style={styles.menuButtonText}>☰</Text>
         </TouchableOpacity>
         
         <Text style={styles.navbarTitle}>BLACKGOLD</Text>
         </View>
         <View style={{flexDirection:"row"}}>
         <TouchableOpacity onPress={() => navigatToPage('notifications')} style={styles.navbarIcon}>
           <MaterialIcons name="notifications" size={24} color="black" />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => alert('Profile')} style={styles.navbarIcon}>
           <FontAwesome name="user" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Profile')} style={styles.navbarIcon}>
           <FontAwesome name="envelope" size={24} color="black" />
        </TouchableOpacity>
         <View style={styles.profile}>
             <Text style={styles.profileName}>Pavan Shimpi</Text>
             <Ionicons name="chevron-down" size={16} color="black" />
           </View>
           </View>
       </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {renderContent()}
      </View>
    </View>
  );
};

const SidebarItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
    <MaterialIcons name={icon} size={24} color="#fff" style={styles.drawerItemIcon} />
    <Text style={styles.drawerItemText}>{title}</Text>
  </TouchableOpacity>
);

// const ManageProjects = () => (
//   <View style={styles.mainContent}>
//          <ScrollView contentContainerStyle={styles.cardsContainer}>
//            {Array.from({ length: 6 }).map((_, index) => (
//              <View key={index} style={styles.card}>
//                <Text style={styles.cardTitle}>Product Title {index + 1}</Text>
//                <Text>ID: 12345{index}</Text>
//                <Text>Start Date: 16 Nov 2024</Text>
//                <Text>End Date: 15 Jan 2025</Text>
//                <Image src='' height={20} width={20} />
//                <View style={styles.progressContainer}>
//                  <Text style={styles.progressText}>75% Completed</Text>
//                </View>
//                <TouchableOpacity style={styles.viewSummaryButton}>
//                  <Text style={styles.viewSummaryText}>View Summary</Text>
//                </TouchableOpacity>
//              </View>
//            ))}
//          </ScrollView>
//        </View>
// );










export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  logo: {
    width: "14%",
    height: "7%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.8 ,
    backgroundColor: '#464655',
    padding: 20,
    zIndex: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  drawerHeader: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#555',
  },
  drawerItemIcon: {
    marginRight: 15,
  },
  drawerItemText: {
    color: '#fff',
    fontSize: 16,
  },
  navbar: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  menuButton: {
    padding: 10,
    
  },
  menuButtonText: {
    color: 'black',
    fontSize: 24,
  },
  navbarTitle: {
    color: 'black',
    fontSize: 18,
    marginTop:14 ,  
    marginRight:20 , 
    fontWeight: 'bold',
  },
  navbarIcon: {
    padding: 10,
  },
  mainContent: {
    flex: 1,
    zIndex: 0,
    marginTop: -3,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profile: {
         flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
      },
      profileName: {
        fontSize: 14,
        color:"black" , 
        marginRight: 5,
      },
      cardsContainer: {
             padding: 10,
             alignItems: 'center',
           },
           card: {
            width: '90%',
            backgroundColor: '#fff',
            padding: 15,
            marginBottom: 15,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
          },
          cardTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
          },
          progressContainer: {
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: '#e0e0e0',
                borderRadius: 5,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
              },
              progressText: {
                color: '#121212',
                fontSize: 14,
              },
              viewSummaryButton: {
                backgroundColor: '#121212',
                padding: 10,
                borderRadius: 5,
              },
              viewSummaryText: {
                color: '#fff',
                textAlign: 'center',
                fontSize: 14,
              },
});

