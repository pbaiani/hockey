const  getLeagueInfo = (league) => {
    // returns all league data associated with particular user
    // and returns leagues looking for a gm (??)
     
    axios.get('api/getLeagues', { 
        }).then(response => {
            if(response.data.success)  {
                console.log('in get league info: ' ,response.data);
                league.setState({ data: response.data.data[0]});
            }
        }).catch((error) => {
    });



}

export default getLeagueInfo;