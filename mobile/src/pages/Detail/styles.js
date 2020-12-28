import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  header: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 32,
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },
  incidentValue: {
    fontSize: 15,
    marginTop: 8,
    color: '#737380',
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 20,
    color: '#13131a',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  heroDescription: {
    fontSize: 15,
    marginTop: 16,
    color: '#737380',
  },
  actions: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  actionsButton: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e02041',
    height: 50,
    width: '48%',
    borderRadius: 8
  },
  actionsButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
