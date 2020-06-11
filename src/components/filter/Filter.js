import React from "react";
import Collapsible from "react-collapsible";
import {
  Grid,
  Button,
  List,
  Checkbox,
  Card,
  Modal,
  Header,
  CardContent,
} from "semantic-ui-react";
import MediaQuery from "react-responsive";
import _ from "underscore";

import Tags from "static/Tags";
import MediaQueryHelper from "static/MediaQueryHelper";
import "components/filter/Filter.css";

const styles = {
  filterList: {
    marginTop: 4,
    marginBottom: 4,
    marginRight: 14,
    marginLeft: 0,
  },
  filterHeader: {
    marginBottom: 0,
  },
  filterSection: {
    marginTop: 12,
    marginBottom: 12,
  },
  filterButton: {
    borderRadius: 6,
  },
};

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.filterList = this.transformTagsToFilterList(Tags.getAllTags());
  }

  transformTagsToFilterList(tags) {
    _.each(tags, (val, key) => {
      val["tag"] = key;
    });

    return _.groupBy(_.values(tags), "category");
  }

  createGroups = () => {
    return _.map(this.filterList, (val, category) => {
      return (
        <Grid.Row key={category} className="filter-row">
          <Card>
            <Card.Content>
              <Card.Header>
                {this.getDisplayNameForCategory(category)}
              </Card.Header>
            </Card.Content>
            <Card.Content>{this.createList(category, val)}</Card.Content>
            <CardContent>
              <Collapsible
                trigger="show more >"
                triggerStyle={{
                  cursor: "pointer",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                {this.createSubList(category, val)}
              </Collapsible>
            </CardContent>
          </Card>
        </Grid.Row>
      );
    });
  };

  // remove previous ternary operator and make getDisplayNameforCategory function cleaner
  getDisplayNameForCategory(category) {
    return this._capitalize(category);
  }

  _capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  // create sublist for hidden tags
  createSubList = (category, items) => {
    return items.map((item) => {
      // Find if the item is currently selecteds
      let existingItem = _.find(this.props.filter[category], (currItem) => {
        return currItem === item.tag;
      });

      return (
        <List.Item key={item.tag}>
          {item.show ? (
            ""
          ) : (
            <Checkbox
              checked={existingItem ? true : false}
              onClick={() => this.props.onFilterChange(category, item.tag)}
              label={item.displayName}
            />
          )}
        </List.Item>
      );
    });
  };

  // main list
  createList = (category, items) => {
    return items.map((item) => {
      // Find if the item is currently selecteds
      let existingItem = _.find(this.props.filter[category], (currItem) => {
        return currItem === item.tag;
      });

      return (
        <List.Item key={item.tag}>
          {item.show ? (
            <Checkbox
              checked={existingItem ? true : false}
              onClick={() => this.props.onFilterChange(category, item.tag)}
              label={item.displayName}
            />
          ) : (
            ""
          )}
        </List.Item>
      );
    });
  };

  renderMobileFilter = () => (
    <Modal open={this.props.open} onClose={this.props.onCloseFilter}>
      <Modal.Header>
        <div className="filter-header">
          <Header as="h2" style={styles.filterHeader}>
            Filters
          </Header>
          <div>
            <button
              className="control-button"
              onClick={this.props.onClearFilter}
            >
              CLEAR ALL
            </button>
            <button
              className="control-button green"
              onClick={this.props.onCloseFilter}
            >
              APPLY
            </button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Content>{this.createMobileGroups()}</Modal.Content>
    </Modal>
  );

  createMobileGroups = () => {
    return _.map(this.filterList, (val, category) => {
      return (
        <div key={category}>
          <h5 className="mobile-group-title">
            {this.getMobileDisplayNameForCategory(category)}
          </h5>
          <List horizontal style={styles.filterSection}>
            {this.createMobileList(category, val)}
          </List>
        </div>
      );
    });
  };

  getMobileDisplayNameForCategory(category) {
    const displayName =
      category === "additional" ? "Additional Tags" : category;
    return displayName.toUpperCase();
  }

  createMobileList = (category, items) => {
    return items.map((item) => {
      // Find if the item is currently selecteds
      let existingItem = _.find(this.props.filter[category], (currItem) => {
        return currItem === item.tag;
      });

      return (
        <List.Item key={item.tag} style={styles.filterList}>
          <Button
            compact
            toggle
            size="small"
            style={styles.filterButton}
            active={existingItem ? true : false}
            onClick={() => this.props.onFilterChange(category, item.tag)}
            content={item.displayName}
          />
        </List.Item>
      );
    });
  };

  render = () => (
    <div>
      <MediaQuery minDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
        {/* Laptop */}
        {this.createGroups()}
        <Grid.Row>
          <Button
            onClick={this.props.onClearFilter}
            content="Clear Filter"
            primary
          />
        </Grid.Row>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={MediaQueryHelper.MIN_WIDTH_TABLET}>
        {/* Mobile and tablet */}
        {this.renderMobileFilter()}
      </MediaQuery>
    </div>
  );
}

export default Filter;
