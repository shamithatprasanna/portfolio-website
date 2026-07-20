import { Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';
import { Experience } from '../../components/experience/experience';
import { Education } from '../../components/education/education';
import { Projects } from '../../components/projects/projects';
import { Publications } from '../../components/publications/publications';

@Component({
  selector: 'app-home',
  imports: [About, Contact, Experience, Education, Projects, Publications],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
