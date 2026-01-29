import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Service {
  sectionsData = [
    {
      tittle: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      text: 'This course prepared me to understand core AWS services and cloud concepts, and to pursue further certifications such as the AWS Certified Cloud Practitioner.',
    },
    {
      tittle: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations',
      text: 'Prepared to pursue further studies and certifications in machine learning and artificial intelligence using AWS services.',
    },
    {
      tittle: 'AWS Academy Graduate - AWS Academy Data Engineering',
      text: 'Equipped with the skills to support data-driven decision-making and pursue further specialization in cloud-based data engineering. ',
    },
    {
      tittle: 'AWS Academy Graduate – AWS Academy Cloud Architecting',
      text: 'Prepared to design and implement cloud solutions and pursue certifications like AWS Certified Solutions Architect – Associate. ',
    },
    {
      tittle: 'Crudapp',
      text: 'This project demonstrates core Laravel development skills, including routing, controller logic, database migrations, and view rendering',
    },
    {
      tittle: 'Dynamic Ecomerce Website',
      text: 'Built a fully functional, dynamic e-commerce website that allows users to browse, search, and purchase products through a seamless online experience.',
    },
    {
      tittle: 'Sport Website in Cambodia',
      text: 'Developed a dynamic sports website focused on delivering up-to-date news, match schedules, team profiles, and event coverage for Cambodian sports fans.',
    },
    {
      tittle: 'Javascript Quiz test',
      text: 'Developed an interactive quiz application using pure JavaScript, HTML, and CSS. The app allows users to test their knowledge through multiple-choice questions and receive real-time feedback.',
    },
    {
      tittle: 'Boostrap Ecomerce Website',
      text: 'Designed and developed a modern, responsive e-commerce website using Bootstrap for layout and styling.',
    },
    {
      tittle: 'Facebook API challenge',
      text: 'The challenge involved authenticating users, fetching profile information, and displaying posts and insights through a custom interface.',
    },
    {
      tittle: 'PHP Ecomerce Project',
      text: 'Developed a dynamic and fully functional E-commerce website using core PHP for backend logic and MySQL for database management.',
    },
    {
      tittle: 'FUll Stack Project Phone Shop',
      text: 'Developed a full-stack web application for an online Phone Shop, allowing users to browse, compare, and purchase smartphones and accessories.',
    },
    {
      tittle: 'SQL Knowledge',
      text: 'Writing SELECT, INSERT, UPDATE, DELETE statements. Creating and managing tables, indexes, and constraints',
    },
    {
      tittle: 'WordPress Ecommerce',
      text: 'Built a fully functional and responsive e-commerce website using WordPress and WooCommerce to enable online shopping with an easy-to-manage backend interface.'
    },
    {
      tittle: 'UX/UI Ecommerce App',
      text: 'Designed an intuitive and visually appealing E-commerce mobile application focused on enhancing the user shopping experience.',
    },
      // Add all other sections here...
  ];

  getQuestionair() {
    return this.sectionsData;
  }
}
