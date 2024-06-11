function skillsMember() {
    // Get the member id
    var member_id = getParameterByName('id');
    // Get the member
    var member = getMember(member_id);
    // Get the skills
    var skills = getSkills();
    // Get the member skills
    var member_skills = getMemberSkills(member_id);
    // Get the member skill ids
    var member_skill_ids = [];
    for (var i = 0; i < member_skills.length; i++) {
        member_skill_ids.push(member_skills[i].skill_id);
    }
    // Get the member skill levels
    var member_skill_levels = [];
    for (var i = 0; i < member_skills.length; i++) {
        member_skill_levels.push(member_skills[i].skill_level);
    }
    // Get the member skill comments
    var member_skill_comments = [];
    for (var i = 0; i < member_skills.length; i++) {
        member_skill_comments.push(member_skills[i].skill_comment);
    }
    // Get the member skill ratings
    var member_skill_ratings = [];
    for (var i = 0; i < member_skills.length; i++) {
        member_skill_ratings.push(member_skills[i].skill_rating);
    }
    // Get the member skill dates
    var member_skill_dates = [];
    for (var i = 0; i < member_skills.length; i++) {
        member_skill_dates.push(member_skills[i].skill_date);
    }
    // Get the member skill statuses
    var member_skill_statuses = [];
    for (var i = 0; i < member_skills.length; i++) {
        member_skill_statuses.push(member_skills[i].skill_status);
    }
    // Get the member skill notes
    var member_skill_notes = [];
    for (var i = 0; i < member_skills.length; i++) {
        member_skill_notes.push(member_skills[i].skill_note);
    }
    // Get the member skill types
    var member_skill_types = [];
    for (var i = 0; i < member_skills.length; i++) {
        member_skill_types.push(member_skills[i].skill_type);
    }
    // Get the member skill names
    var member_skill_names = [];
    for (var i = 0; i < member_skills.length; i++) {
        member_skill_names.push(member_skills[i].skill_name);
    }
    // Get the member skill descriptions
    var member