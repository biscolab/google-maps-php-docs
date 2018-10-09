/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
	docUrl(doc, language) {
		const baseUrl = this.props.config.baseUrl;
		return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
	}

	pageUrl(doc, language) {
		const baseUrl = this.props.config.baseUrl;
		return baseUrl + (language ? `${language}/` : '') + doc;
	}

	render() {
		return (
			<footer className="nav-footer" id="footer">
				<section className="sitemap">
					<a href={this.props.config.baseUrl} className="nav-home">
						{this.props.config.footerIcon && (
							<img
								src={this.props.config.baseUrl + this.props.config.footerIcon}
								alt={this.props.config.title}
								width="32"
								height="32"
							/>
						)}
					</a>
					<div>
						<h5>Docs</h5>
						<a href={this.docUrl('getting-started', this.props.language)}>
							Getting Started
						</a>
						{this.props.config.services.map(item => (<a href={this.docUrl(item.url)} key={item.url}>
							{item.title}
						</a>))}
					</div>
					<div>
						<h5>Community</h5>
						<a href={this.props.config.referencesUrl} target={'_blank'}>
							Complete reference
						</a>
						<a href={'https://github.com/biscolab/google-maps-php-sdk/issues'} target={'_blank'}>
							Issue tracker
						</a>
					</div>
					<div>
						<h5>More</h5>
						<a className="github-button" href={this.props.config.repoUrl} aria-label="Star biscolab/google-maps-php-sdk on GitHub">Github</a>
					</div>
				</section>

				<section className="copyright">{this.props.config.copyright}</section>
			</footer>
		);
	}
}

module.exports = Footer;
