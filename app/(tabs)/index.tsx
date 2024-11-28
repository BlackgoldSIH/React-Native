import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SidebarWithNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(Dimensions.get('window').width < 768);
  const slideAnimation = useState(new Animated.Value(-300))[0]; // Sidebar starts off-screen

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = Dimensions.get('window').width < 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) {
        setIsSidebarOpen(false); // Ensure modal behavior doesn't persist on desktop
        slideAnimation.setValue(0); // Reset sidebar position
      }
    };

    const subscription = Dimensions.addEventListener('change', handleResize);
    return () => subscription?.remove();
  }, []);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      // Close sidebar
      Animated.timing(slideAnimation, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsSidebarOpen(false));
    } else {
      // Open sidebar
      setIsSidebarOpen(true);
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleOutsideClick = () => {
    if (isMobile && isSidebarOpen) toggleSidebar();
  };

  const menuItems = [
    { id: 1, title: 'Manage Projects', icon: <Ionicons name="folder" size={20} color="#fff" /> },
    { id: 2, title: 'Chat', icon: <Ionicons name="chatbubble" size={20} color="#fff" /> },
    { id: 3, title: 'Track Finance', icon: <Ionicons name="trending-up" size={20} color="#fff" /> },
    { id: 4, title: 'Reports & Docs', icon: <Ionicons name="document-text" size={20} color="#fff" /> },
    { id: 5, title: 'Feedback', icon: <Ionicons name="people" size={20} color="#fff" /> },
    { id: 6, title: 'Workflow', icon: <Ionicons name="analytics" size={20} color="#fff" /> },
    { id: 7, title: 'Manage Researcher', icon: <Ionicons name="sync" size={20} color="#fff" /> },
    { id: 8, title: 'Ask Anything', icon: <Ionicons name="star" size={20} color="#ff007f" /> },
  ];

  const item = [ 
    { id: 1, title: 'Settings', icon: <Ionicons name="folder" size={20} color="#fff" /> },
    { id: 2, title: 'Help center', icon: <Ionicons name="chatbubble" size={20} color="#fff" /> },
  ]

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Dashboard</Text>
        <View style={styles.navRight}>
          <Ionicons name="search" size={20} color="#000" style={styles.navIcon} />
          <Ionicons name="notifications" size={20} color="#000" style={styles.navIcon} />
          <Ionicons name="mail" size={20} color="#000" style={styles.navIcon} />
          <View style={styles.profile}>
            <Text style={styles.profileName}>Pavan Shimpi</Text>
            <Ionicons name="chevron-down" size={16} color="#000" />
          </View>
        </View>
      </View>

      {/* Sidebar */}
      {isMobile ? (
        <>
          {/* Overlay to close sidebar */}
          <Pressable
            style={isSidebarOpen ? styles.outsideClickArea : null}
            onPress={handleOutsideClick}
            pointerEvents={isSidebarOpen ? 'auto' : 'none'}
          />
          <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnimation }] }]}>
            <Text style={styles.logo}>BLACKGOLD</Text>
            {menuItems.map((item) => (
              <TouchableOpacity key={item.id} style={styles.menuItem}>
                <View style={styles.menuIcon}>{item.icon}</View>
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
            
           {item.map((item) => (
              <TouchableOpacity key={item.id} style={styles.menuItem}>
                <View style={styles.menuIcon}>{item.icon}</View>
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </>
      ) : (
        <View style={[styles.sidebar, { width: '25%' }]}>
          <Text style={styles.logo}>BLACKGOLD</Text>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuIcon}>{item.icon}</View>
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:4,
    marginTop:1,
    flexDirection: 'row',
    backgroundColor: '#f4f4f4', // Default screen background
  },
  navbar: {
    height: 80,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    padding:4,
    marginTop:4 , 
    width:'100%'
  },
  menuButton: {
    padding: 5,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navIcon: {
    marginHorizontal: 8,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  profileName: {
    fontSize: 14,
    marginRight: 5,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 300,
    backgroundColor: '#2c2e3f',
    padding: 20,
    zIndex: 10,
    elevation: 10,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#444',
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#ffffff',
  },
  outsideClickArea: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 9,
  },
});

export default SidebarWithNavbar;
