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
  headerText: {
    fontSize: 15,
    color: '#737380',
  },
  headerTextBold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 42,
    color: '#13131a',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },
  incidentList: {
    marginTop: 32,
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },
  incidentValue: {
    fontSize: 15,
    marginTop: 8,
    marginBottom: 24,
    color: '#737380',
  },
  detailsButton: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsButtonText: {
    fontSize: 15,
    color: '#e02041',
    fontWeight: 'bold',
  },
});