PlayerEvents.loggedIn(event => {
	
		const teamName = "Chosen" // Change to desired team name
	
		const player = event.player
		const plName = player.getName().getString()
		const server = player.getServer()
		const sc = server.getScoreboard()
		if(sc.getPlayerTeam(plName) != null)
			return
		
		const team = sc.addPlayerTeam(teamName)
		sc.addPlayerToTeam(plName, team)
})