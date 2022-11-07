export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',
    height: 'calc(40% - 40px)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'flex-start',
    margin: 'auto',
    display: 'block'
  },

  text: {
    order: '2',
    flex: '1 0 38%',
    alignSelf: 'flex-start',
    paddingLeft: '1.125rem'
  },

  break: {
    color: 'rgba(174, 174, 174, 0.22)',
    width: '95%',
    marginRight: '100px'
  }
}
