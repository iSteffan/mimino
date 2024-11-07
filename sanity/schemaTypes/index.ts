import page from './page-schema';
import project from './project-schema';
import dishes from './dishes';
import snacks from './snacks';

import { eventType } from './eventType';
import { artistType } from './artistType';
import { venueType } from './venueType';

const schemas = [project, page, eventType, artistType, venueType, dishes, snacks];

export default schemas;
