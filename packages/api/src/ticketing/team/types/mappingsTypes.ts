import { JiraTeamMapper } from '../services/jira/mappers';
import { FrontTeamMapper } from '../services/front/mappers';
import { GorgiasTeamMapper } from '../services/gorgias/mappers';
import { ZendeskTeamMapper } from '../services/zendesk/mappers';

const zendeskTeamMapper = new ZendeskTeamMapper();
const frontTeamMapper = new FrontTeamMapper();
const gorgiasTeamMapper = new GorgiasTeamMapper();
const jiraTeamMapper = new JiraTeamMapper();

export const teamUnificationMapping = {
  zendesk: {
    unify: zendeskTeamMapper.unify.bind(zendeskTeamMapper),
    desunify: zendeskTeamMapper.desunify,
  },
  front: {
    unify: frontTeamMapper.unify.bind(frontTeamMapper),
    desunify: frontTeamMapper.desunify,
  },
  gorgias: {
    unify: gorgiasTeamMapper.unify.bind(gorgiasTeamMapper),
    desunify: gorgiasTeamMapper.desunify,
  },
  jira: {
    unify: jiraTeamMapper.unify.bind(jiraTeamMapper),
    desunify: jiraTeamMapper.desunify,
  },
};
