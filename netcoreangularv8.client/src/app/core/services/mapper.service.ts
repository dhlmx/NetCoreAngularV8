// Interfaces & Models
//import { Author } from '../models/author';
//import { Camera } from '../models/photography/camera';
//import { Category } from '../models/photography/category';
//import { Collaboration } from '../models/collaboration';
//import { Country } from '../models/country';
//import { Format } from '../models/format';
//import { IAuthor } from '../interfaces/iauthor';
//import { ICamera } from '../interfaces/photos/icamera';
//import { ICategory } from '../interfaces/photos/icategory';
//import { ICollaboration } from '../interfaces/icollaboration';
//import { ICountry } from '../interfaces/icountry';
//import { IFormat } from '../interfaces/iformat';
//import { ILanguage } from '../interfaces/ilanguage';
//import { ILens } from '../interfaces/photos/ilens';
//import { IResonance } from '../interfaces/iresonance';
//import { ISelect } from '../interfaces/iselect';
//import { ISource } from '../interfaces/isource';
//import { ITopic } from '../interfaces/itopic';
//import { IViewCamera } from '../interfaces/photos/iview-camera';
//import { IViewCollaboration } from '../interfaces/iview-collaboration';
//import { IViewCollaborationSummary } from '../interfaces/iview-collaboration-summary';
//import { IViewResonance } from '../interfaces/iview-resonance';
//import { IViewResonancesByCountry } from '../interfaces/iview-resonances-by-country';
//import { IViewResonancesByTopic } from '../interfaces/iview-resonances-by-topic';
//import { Language } from '../models/language';
//import { Lens } from '../models/photography/lens';
//import { Resonance } from '../models/resonance';
//import { Source } from '../models/source';
//import { Topic } from '../models/topic';
//import { ViewCamera } from '../models/photography/view-camera';
//import { ViewCollaboration } from '../models/view-collaboration';
//import { ViewCollaborationSummary } from '../models/view-collaboration-summary';
//import { ViewResonance } from '../models/view-resonance';
//import { ViewResonancesByCountry } from '../models/view-resonances-by-country';
//import { ViewResonancesByTopic } from '../models/view-resonances-by-topic';
//import { IViewLens } from '../interfaces/photos/iview-lens';
//import { ViewLens } from '../models/photography/view-lens';
//import { ViewPhoto } from '../models/photography/view-photo';
//import { IGalleryPhoto } from '../interfaces/photos/igallery-photo';

// Selects
//export const authorsToISelect = (source: Author[], includeAllOption: boolean, forceAllOption: boolean = false): ISelect[] => {
//  const selectOptions = source.map(item => ({ label: item.author, value: item.authorId, inactive: false } as ISelect));

//  if ((includeAllOption && source.length > 1) || forceAllOption) {
//    selectOptions.unshift({ label: 'Seleccionar', value: 0, inactive: false } as ISelect);
//  }

//  return selectOptions;
//},

//camerasToISelect = (source: ICamera[]|Camera[]): ISelect[] => {
//  return source.map(item => ({ label: item.camera, value: item.cameraId, inactive: false } as ISelect));
//},

//categoriesToISelect = (source: ICategory[]|Category[]): ISelect[] => {
//  return source.map(item => ({ label: item.category, value: item.categoryId, inactive: false } as ISelect));
//},

//collaborationsToISelect = (source: ViewCollaborationSummary[], includeAllOption: boolean, forceAllOption: boolean = false): ISelect[] => {
//  const selectOptions = source.map(item => ({ label: item.subtitle ? `${item.title} - ${item.subtitle}` : item.title, value: item.collaborationId, inactive: false } as ISelect));

//  if ((includeAllOption && source.length > 1) || forceAllOption) {
//    selectOptions.unshift({ label: 'Seleccionar', value: 0, inactive: false } as ISelect);
//  }

//  return selectOptions;
//},

//collaborationsTopicToISelect = (source: ViewCollaborationSummary[], includeAllOption: boolean, forceAllOption: boolean = false): ISelect[] => {
//  const selectOptions = source.map(item => ({ label: item.topic, value: item.topicId, inactive: false } as ISelect));

//  if ((includeAllOption && source.length > 1) || forceAllOption) {
//    selectOptions.unshift({ label: 'Seleccionar', value: 0, inactive: false } as ISelect);
//  }

//  return selectOptions;
//},

//countriesToISelect = (source: Country[]): ISelect[] => {
//  return source.map(item => ({ label: item.alias, value: item.countryId, inactive: false } as ISelect));
//},

//formatsToISelect = (source: Format[], includeAllOption: boolean): ISelect[] => {
//  const selectOptions = source.map(item => ({ label: item.format, value: item.formatId, inactive: false } as ISelect));

//  if (includeAllOption && source.length > 1) {
//    selectOptions.unshift({ label: 'Todos', value: 'Todos', inactive: false } as ISelect);
//  }

//  return selectOptions;
//},

//languagesToISelect = (source: Language[], includeAllOption: boolean): ISelect[] => {
//  const selectOptions = source.map(item => ({ label: item.language, value: item.languageId, inactive: false } as ISelect));

//  if (includeAllOption && source.length > 1) {
//    selectOptions.unshift({ label: 'Todos', value: 'Todos', inactive: false } as ISelect);
//  }

//  return selectOptions;
//},

//lensToISelect = (source: ILens[]|Lens[]): ISelect[] => {
//  return source.map(item => ({ label: item.lens, value: item.lensId, inactive: false } as ISelect));
//},

//sourcesToISelect = (source: Source[], includeAllOption: boolean): ISelect[] => {
//  const selectOptions = source.map(item => ({ label: item.alias, value: item.sourceId, inactive: false } as ISelect));

//  if (includeAllOption && source.length > 1) {
//    selectOptions.unshift({ label: 'Todos', value: 'Todos', inactive: false } as ISelect);
//  }

//  return selectOptions;
//},

//topicsToISelect = (source: Topic[], includeAllOption: boolean): ISelect[] => {
//  const selectOptions = source.map(item => ({ label: item.topic, value: item.topicId, inactive: false } as ISelect));

//  if (includeAllOption && source.length > 1) {
//    selectOptions.unshift({ label: 'Todos', value: 0, inactive: false } as ISelect);
//  }

//  return selectOptions;
//},

//viewCamerasToISelect = (source: IViewCamera[]|ViewCamera[]): ISelect[] => {
//  return source.map(item => ({ label: `${item.brand} ${item.camera}`, value: item.cameraId, inactive: false } as ISelect));
//},

//viewLensToISelect = (source: IViewLens[]|ViewLens[]): ISelect[] => {
//  return source.map(item => ({ label: `${item.brand} ${item.lens}`, value: item.lensId, inactive: false } as ISelect));
//},

/*
  alt: string;
  description: string;
  itemImageSrc: string;
  thumbnailImageSrc: string;
  title: string;
*/

//viewPhotosToGalleryPhotos = (source: ViewPhoto[]): IGalleryPhoto[] => {
//  return source.map(photo => ({
//    alt: photo.title,
//    description: photo.description,
//    itemImageSrc: photo.photoURL,
//    thumbnailImageSrc: photo.photoURL.replace('.JPG', '_SMALL.JPG'),
//    title: `${photo.title}${photo.subtitle ? ' - ' : ''}${photo.subtitle}`
//  } as IGalleryPhoto));
//},

// Interfaces -> Models
//toAuthor = (source: IAuthor) => new Author(source.authorId, source.author, source.alias, source.summary),

//toAuthors = (source: IAuthor[]): Author[] => source.map(iAuthor => toAuthor(iAuthor)),

//toCollaboration = (source: ICollaboration): Collaboration => {
//  const target = new Collaboration();

//  target.authorId = source.authorId;
//  target.collaboration = source.collaboration;
//  target.collaborationId = source.collaborationId;
//  target.note = source.note;
//  target.subtitle = source.subtitle;
//  target.title = source.title;
//  target.topicId = source.topicId;
//  target.visits = source.visits;

//  return target;
//},

//toCollaborations = (source: ICollaboration[]): Collaboration[] => source.map(iCollaboration => toCollaboration(iCollaboration)),

//toFormat = (source: IFormat): Format => {
//  return new Format(
//    source.formatId,
//    source.format
//  );
//},

//toFormats = (source: IFormat[]): Format[] => source.map(iItem => toFormat(iItem)),

//toLanguage = (source: ILanguage): Language => {
//  return new Language(
//    source.languageId,
//    source.language
//  );
//},

//toLanguages = (source: ILanguage[]): Language[] => source.map(iItem => toLanguage(iItem)),

//toResonance = (source: IResonance): Resonance => {
//  const target = new Resonance();

//  target.date = new Date(source.date);
//  target.countryId = source.countryId;
//  target.topicId = source.topicId;
//  target.formatId = source.formatId;
//  target.languageId = source.languageId;
//  target.note = source.note;
//  target.reference = source.reference;
//  target.resonance = source.resonance;
//  target.resonanceId = source.resonanceId;
//  target.sourceId = source.sourceId;
//  target.time = new Date(source.time);

//  return target;
//},

//toResonances = (source: IResonance[]): Resonance[] => source.map(iResonance => toResonance(iResonance)),

//toSource = (source: ISource): Source => {
//  return new Source(
//    source.sourceId,
//    source.source,
//    source.alias
//  );
//},

//toSources = (source: ISource[]): Source[] => source.map(iItem => toSource(iItem)),

//toTopic = (source: ITopic): Topic => {
//  return new Topic(
//    source.topicId,
//    source.topic
//  );
//},

//toTopics = (source: ITopic[]): Topic[] => source.map(iTopic => toTopic(iTopic)),

//toViewCollaboration = (source: IViewCollaboration): ViewCollaboration => {
//  const target = new ViewCollaboration();

//  target.alias = source.alias;
//  target.author = source.author;
//  target.authorId = source.authorId;
//  target.collaboration = source.collaboration;
//  target.collaborationId = source.collaborationId;
//  target.note = source.note;
//  target.subtitle = source.subtitle;
//  target.summary = source.summary;
//  target.title = source.title;
//  target.topic = source.topic;
//  target.topicId = source.topicId;
//  target.visits = source.visits;

//  return target;
//},

//toViewCollaborations = (source: IViewCollaboration[]): ViewCollaboration[] => source.map(iVC => toViewCollaboration(iVC)),

//toViewResonance = (source: IViewResonance): ViewResonance => {
//  const target = new ViewResonance();

//  target.resonanceId = source.resonanceId;
//  target.countryId = source.countryId;
//  target.country = source.country;
//  target.countryAlias = source.countryAlias;
//  target.isoCode = source.isoCode;
//  target.flagCode = source.flagCode;
//  target.abbreviation = source.abbreviation;
//  target.topicId = source.topicId;
//  target.topic = source.topic;
//  target.formatId = source.formatId;
//  target.format = source.format;
//  target.languageId = source.languageId;
//  target.language = source.language;
//  target.sourceId = source.sourceId;
//  target.source = source.source;
//  target.sourceAlias = source.sourceAlias;
//  target.date = new Date(source.date);
//  target.time = new Date(source.time);
//  target.resonance = source.resonance;
//  target.reference = source.reference;
//  target.note = source.note;

//  return target;
//},

//toViewResonances = (source: IViewResonance[]): ViewResonance[] => source.map(iViewResonance => toViewResonance(iViewResonance)),

//toViewCollaborationSummary = (source: IViewCollaborationSummary): ViewCollaborationSummary => {
//  const target = new ViewCollaboration();

//  target.author = source.author;
//  target.authorId = source.authorId;
//  target.collaborationId = source.collaborationId;
//  target.subtitle = source.subtitle;
//  target.title = source.title;
//  target.topic = source.topic;
//  target.topicId = source.topicId;
//  target.visits = source.visits;

//  return target;
//},

//toViewCollaborationsSummary = (source: IViewCollaborationSummary[]): ViewCollaborationSummary[] => source.map(iVCS => toViewCollaborationSummary(iVCS)),

//toViewResonancesByCountries = (source: IViewResonancesByCountry[]) => source.map(iVRBC => toViewResonancesByCountry(iVRBC)),

//toViewResonancesByCountry = (source: IViewResonancesByCountry) => new ViewResonancesByCountry(source.countryAlias, source.resonances),

//toViewResonancesByTopics = (source: IViewResonancesByTopic[]) => source.map(iVRBT => toViewResonancesByTopic(iVRBT)),

//toViewResonancesByTopic = (source: IViewResonancesByTopic) => new ViewResonancesByTopic(source.topic, source.resonances);
