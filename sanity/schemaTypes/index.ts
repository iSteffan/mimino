import page from './page-schema';
import project from './project-schema';
import dishes from './dishes';

import { eventType } from './eventType';
import { artistType } from './artistType';
import { venueType } from './venueType';

const schemas = [project, page, eventType, artistType, venueType, dishes];

export default schemas;
