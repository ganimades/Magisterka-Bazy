import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  headerContainer: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  h1: {
    color: 'rgb(33, 37, 41)',
    fontSize: 40,
    marginTop: 10,
  },
  infoBar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
  },
  listTypes: {
    flexDirection: 'row',
  },
  taskCreator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskCreatorInput: {
    flex: 1,
  },
  ////////
  listContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  //////////
  taskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  taskName: {
    flex: 1,
    fontSize: 17,
    color: 'rgb(33, 37, 41)',
  },
  taskRemove: {
    width: 50,
  },
  taskCheckbox: {
    marginRight: 5,
  },
  // ----------- SIDE PANEL ---------------
  sidepanel: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)'
  },
  openSidepanel: {
    zIndex: 999999,
  },
  h3: {
    fontSize: 28,
    color: 'rgb(33, 37, 41)\n',
  },
  sidepanelOpened: {
  },
  closeSidepanel: {
    zIndex: 999999,
  },
  section: {
    marginTop: 15,
  },
  sectionName: {
    fontSize: 17,
    fontWeight: '500',
    color: '#525252',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
  itemKey: {
    marginRight: 5,
    fontSize: 17,
    color: '#636363',
  },
});