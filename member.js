function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'v@',
        bindToController: true,
        scope:{
            member: 'm'
        }

    };
}