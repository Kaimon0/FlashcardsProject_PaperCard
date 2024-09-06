import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',  tabBarShowLabel: false }} >
      <Tabs.Screen
        name="index"
        options={{
          title: 'accueil',
        }}
      />
      
      <Tabs.Screen
        name="newdeck"
        options={{
          title: 'Nouveau',
        }}
      />

    <Tabs.Screen
        name="mydecks"
        options={{
          title: 'My decks',
        }}
      />

    <Tabs.Screen
        name="profile"
        options={{
          title: 'My profile',
          
        }}
      />

    </Tabs>


  );
}
